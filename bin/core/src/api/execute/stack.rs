use anyhow::Context;
use formatting::format_serror;
use monitor_client::{
  api::execute::*,
  entities::{
    permission::PermissionLevel, stack::StackInfo, update::Update,
    user::User,
  },
};
use mungos::mongodb::bson::{doc, to_document};
use periphery_client::api::compose::*;
use resolver_api::Resolve;

use crate::{
  helpers::{
    interpolate_variables_secrets_into_environment, periphery_client,
    stack::{
      execute::execute_compose, get_stack_and_server,
      json::get_config_json, services::extract_services,
    },
    update::update_update,
  },
  monitor::update_cache_for_server,
  state::{action_states, db_client, State},
};

impl Resolve<DeployStack, (User, Update)> for State {
  #[instrument(name = "DeployStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    DeployStack { stack, stop_time }: DeployStack,
    (user, mut update): (User, Update),
  ) -> anyhow::Result<Update> {
    let (mut stack, server) = get_stack_and_server(
      &stack,
      &user,
      PermissionLevel::Execute,
      true,
    )
    .await?;

    // get the action state for the stack (or insert default).
    let action_state =
      action_states().stack.get_or_insert_default(&stack.id).await;

    // Will check to ensure stack not already busy before updating, and return Err if so.
    // The returned guard will set the action state back to default when dropped.
    let _action_guard =
      action_state.update(|state| state.deploying = true)?;

    let git_token = crate::helpers::git_token(
      &stack.config.git_provider,
      &stack.config.git_account,
      |https| stack.config.git_https = https,
    ).await.with_context(
      || format!("Failed to get git token in call to db. Stopping run. | {} | {}", stack.config.git_provider, stack.config.git_account),
    )?;

    let registry_token = crate::helpers::registry_token(
      &stack.config.registry_provider,
      &stack.config.registry_account,
    ).await.with_context(
      || format!("Failed to get registry token in call to db. Stopping run. | {} | {}", stack.config.registry_provider, stack.config.registry_account),
    )?;

    if !stack.config.skip_secret_interp {
      interpolate_variables_secrets_into_environment(
        &mut stack.config.environment,
        &mut update,
      )
      .await?;
    }

    let ComposeUpResponse {
      logs,
      deployed,
      file_contents,
      file_missing,
      remote_error,
      commit_hash,
      commit_message,
    } = periphery_client(&server)?
      .request(ComposeUp {
        stack: stack.clone(),
        service: None,
        git_token,
        registry_token,
      })
      .await?;

    update.logs.extend(logs);

    let update_info = async {
      let (latest_services, json, json_error) = if let Some(
        contents,
      ) = &file_contents
      {
        let (json, json_error) = get_config_json(contents).await;
        match extract_services(&stack.project_name(true), contents) {
          Ok(services) => (services, json, json_error),
          Err(e) => {
            update.push_error_log(
            "extract services",
            format_serror(&e.context("Failed to extract stack services. Things probably won't work correctly").into())
          );
            (Vec::new(), json, json_error)
          }
        }
      } else {
        // maybe better to do something else here for services.
        (stack.info.latest_services.clone(), None, None)
      };

      let project_name = stack.project_name(true);

      let (
        deployed_services,
        deployed_contents,
        deployed_hash,
        deployed_message,
        deployed_json,
        deployed_json_error,
      ) = if deployed {
        (
          latest_services.clone(),
          file_contents.clone(),
          commit_hash.clone(),
          commit_message.clone(),
          json.clone(),
          json_error.clone(),
        )
      } else {
        (
          stack.info.deployed_services,
          stack.info.deployed_contents,
          stack.info.deployed_hash,
          stack.info.deployed_message,
          stack.info.deployed_json,
          stack.info.deployed_json_error,
        )
      };

      let info = StackInfo {
        file_missing,
        // Maybe this still has some edge cases, but see how it does.
        project_missing: !deployed,
        deployed_project_name: project_name.into(),
        deployed_services,
        deployed_contents,
        deployed_hash,
        deployed_message,
        deployed_json,
        deployed_json_error,
        latest_services,
        latest_json: json,
        latest_json_error: json_error,
        remote_contents: file_contents.and_then(|contents| {
          // Only store remote contents here (not defined in `file_contents`)
          stack.config.file_contents.is_empty().then_some(contents)
        }),
        remote_error,
        latest_hash: commit_hash,
        latest_message: commit_message,
      };

      let info = to_document(&info)
        .context("failed to serialize stack info to bson")?;

      db_client()
        .await
        .stacks
        .update_one(
          doc! { "name": &stack.name },
          doc! { "$set": { "info": info } },
        )
        .await
        .context("failed to update stack info on db")?;
      anyhow::Ok(())
    };

    // This will be weird with single service deploys. Come back to it.
    if let Err(e) = update_info.await {
      update.push_error_log(
        "refresh stack info",
        format_serror(
          &e.context("failed to refresh stack info on db").into(),
        ),
      )
    }

    // Ensure cached stack state up to date by updating server cache
    update_cache_for_server(&server).await;

    update.finalize();
    update_update(update.clone()).await?;

    Ok(update)
  }
}

impl Resolve<StartStack, (User, Update)> for State {
  #[instrument(name = "StartStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    StartStack { stack, service }: StartStack,
    (user, update): (User, Update),
  ) -> anyhow::Result<Update> {
    let no_service = service.is_none();
    execute_compose::<StartStack>(
      &stack,
      service,
      &user,
      |state| {
        if no_service {
          state.starting = true
        }
      },
      update,
      (),
    )
    .await
  }
}

impl Resolve<RestartStack, (User, Update)> for State {
  #[instrument(name = "RestartStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    RestartStack { stack, service }: RestartStack,
    (user, update): (User, Update),
  ) -> anyhow::Result<Update> {
    let no_service = service.is_none();
    execute_compose::<RestartStack>(
      &stack,
      service,
      &user,
      |state| {
        if no_service {
          state.restarting = true;
        }
      },
      update,
      (),
    )
    .await
  }
}

impl Resolve<PauseStack, (User, Update)> for State {
  #[instrument(name = "PauseStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    PauseStack { stack, service }: PauseStack,
    (user, update): (User, Update),
  ) -> anyhow::Result<Update> {
    let no_service = service.is_none();
    execute_compose::<PauseStack>(
      &stack,
      service,
      &user,
      |state| {
        if no_service {
          state.pausing = true
        }
      },
      update,
      (),
    )
    .await
  }
}

impl Resolve<UnpauseStack, (User, Update)> for State {
  #[instrument(name = "UnpauseStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    UnpauseStack { stack, service }: UnpauseStack,
    (user, update): (User, Update),
  ) -> anyhow::Result<Update> {
    let no_service = service.is_none();
    execute_compose::<UnpauseStack>(
      &stack,
      service,
      &user,
      |state| {
        if no_service {
          state.unpausing = true
        }
      },
      update,
      (),
    )
    .await
  }
}

impl Resolve<StopStack, (User, Update)> for State {
  #[instrument(name = "StopStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    StopStack {
      stack,
      stop_time,
      service,
    }: StopStack,
    (user, update): (User, Update),
  ) -> anyhow::Result<Update> {
    let no_service = service.is_none();
    execute_compose::<StopStack>(
      &stack,
      service,
      &user,
      |state| {
        if no_service {
          state.stopping = true
        }
      },
      update,
      stop_time,
    )
    .await
  }
}

impl Resolve<DestroyStack, (User, Update)> for State {
  #[instrument(name = "DestroyStack", skip(self, user, update), fields(user_id = user.id, update_id = update.id))]
  async fn resolve(
    &self,
    DestroyStack {
      stack,
      remove_orphans,
      stop_time,
    }: DestroyStack,
    (user, update): (User, Update),
  ) -> anyhow::Result<Update> {
    execute_compose::<DestroyStack>(
      &stack,
      None,
      &user,
      |state| state.destroying = true,
      update,
      (stop_time, remove_orphans),
    )
    .await
  }
}
