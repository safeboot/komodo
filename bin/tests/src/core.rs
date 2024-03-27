use monitor_client::entities::deployment::DeploymentQuerySpecifics;
use monitor_client::entities::resource::ResourceQuery;
use monitor_client::MonitorClient;
use monitor_client::{
  api::{execute, read, write},
  entities::{
    build::PartialBuildConfig, repo::PartialRepoConfig,
    server::PartialServerConfig,
  },
};

#[allow(unused)]
pub async fn tests() -> anyhow::Result<()> {
  dotenv::dotenv().ok();

  let monitor = MonitorClient::new_from_env().await?;

  // create_server(&monitor).await?;

  // let mut servers = monitor.read(read::ListServers { query: None }).await?;
  // let server_id = servers.pop().unwrap().id;
  // let server = monitor.read(read::GetServer { id: server_id }).await?;
  // println!("{servers:#?}");

  // let mut builds = monitor.read(read::ListBuilds { query: None }).await?;
  // let build_id = builds.pop().unwrap().id;
  // run_build(&monitor, build_id).await?;

  // let updates = monitor.read(read::ListUpdates { query: None, page: 0 }).await?;
  // println!("{updates:#?}");

  // let dep_summary =
  //   monitor.read(read::GetDeploymentsSummary {}).await?;
  // println!("{dep_summary:#?}");

  // let deps = monitor.read(read::ListDeployments::default()).await?;
  // println!("{deps:#?}");

  let deps = monitor
    .read(read::ListDeployments {
      query: ResourceQuery::builder()
        .names([String::from("haboda"), String::from("actual_shit")])
        .specific(
          DeploymentQuerySpecifics::builder()
            // .server_ids([String::from("")])
            .build(),
        )
        .build(),
      // query: Default::default(),
    })
    .await?;
  println!("{deps:#?}");

  Ok(())
}

#[allow(unused)]
async fn run_build(
  monitor: &MonitorClient,
  build: String,
) -> anyhow::Result<()> {
  println!("running build...");

  let update = monitor.execute(execute::RunBuild { build }).await?;

  println!("{update:#?}");

  Ok(())
}

#[allow(unused)]
async fn create_build(monitor: &MonitorClient) -> anyhow::Result<()> {
  let mut res = monitor.read(read::ListServers::default()).await?;
  let server_id = res.pop().unwrap().id;

  let build = monitor
    .write(write::CreateBuild {
      name: String::from("monitor-core"),
      config: PartialBuildConfig {
        repo: "mbecker20/monitor".to_string().into(),
        branch: "next".to_string().into(),
        builder_id: Default::default(),
        dockerfile_path: "bin/core/Dockerfile".to_string().into(),
        ..Default::default()
      },
    })
    .await?;

  println!("{build:#?}");

  Ok(())
}

#[allow(unused)]
async fn create_repo(monitor: &MonitorClient) -> anyhow::Result<()> {
  let mut res = monitor.read(read::ListServers::default()).await?;
  let server_id = res.pop().unwrap().id;

  let repo = monitor
    .write(write::CreateRepo {
      name: String::from("monitor"),
      config: PartialRepoConfig {
        server_id: server_id.into(),
        repo: "mbecker20/monitor".to_string().into(),
        branch: "next".to_string().into(),
        ..Default::default()
      },
    })
    .await?;

  println!("{repo:#?}");

  Ok(())
}

#[allow(unused)]
async fn create_server(
  monitor: &MonitorClient,
) -> anyhow::Result<()> {
  let res = monitor
    .write(write::CreateServer {
      name: String::from("mogh-server"),
      config: PartialServerConfig {
        address: "http://localhost:8001".to_string().into(),
        ..Default::default()
      },
    })
    .await?;

  println!("{res:#?}");

  Ok(())
}

// #[derive(Deserialize)]
// struct CreateSecretEnv {
//   monitor_address: String,
//   monitor_username: String,
//   monitor_password: String,
// }

// #[allow(unused)]
// async fn create_secret() -> anyhow::Result<()> {
//   let env: CreateSecretEnv = envy::from_env()?;

//   let monitor = MonitorClient::new_with_new_account(
//     env.monitor_address,
//     env.monitor_username,
//     env.monitor_password,
//   )
//   .await?;

//   let secret = monitor
//     .write(write::CreateLoginSecret {
//       name: "tests".to_string(),
//       expires: None,
//     })
//     .await?;

//   println!("{secret:#?}");

//   Ok(())
// }
