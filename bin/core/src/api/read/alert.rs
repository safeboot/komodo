use anyhow::Context;
use async_trait::async_trait;
use monitor_client::{
  api::read::{ListAlerts, ListAlertsResponse},
  entities::{deployment::Deployment, server::Server, user::User},
};
use mungos::{
  find::find_collect,
  mongodb::{bson::doc, options::FindOptions},
};
use resolver_api::Resolve;

use crate::{
  db::db_client, helpers::resource::StateResource, state::State,
};

const NUM_ALERTS_PER_PAGE: u64 = 10;

#[async_trait]
impl Resolve<ListAlerts, User> for State {
  async fn resolve(
    &self,
    ListAlerts { query, page }: ListAlerts,
    user: User,
  ) -> anyhow::Result<ListAlertsResponse> {
    let mut query = query.unwrap_or_default();
    if !user.admin {
      let server_ids =
        Server::get_resource_ids_for_non_admin(&user.id).await?;
      let deployment_ids =
        Deployment::get_resource_ids_for_non_admin(&user.id).await?;
      query.extend(doc! {
        "$or": [
          { "target.type": "Server", "target.id": { "$in": &server_ids } },
          { "target.type": "Deployment", "target.id": { "$in": &deployment_ids } },
        ]
      });
    }

    let alerts = find_collect(
      &db_client().await.alerts,
      query,
      FindOptions::builder()
        .sort(doc! { "ts": -1 })
        .limit(NUM_ALERTS_PER_PAGE as i64)
        .skip(page * NUM_ALERTS_PER_PAGE)
        .build(),
    )
    .await
    .context("failed to get alerts from db")?;

    let next_page = if alerts.len() < NUM_ALERTS_PER_PAGE as usize {
      None
    } else {
      Some((page + 1) as i64)
    };

    let res = ListAlertsResponse { next_page, alerts };

    Ok(res)
  }
}
