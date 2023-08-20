use std::{collections::HashMap, str::FromStr};

use anyhow::Context;
use monitor_types::{
    entities::{
        alert::{Alert, AlertData, AlertDataVariant},
        server::{stats::SeverityLevel, Server, ServerListItem, ServerStatus},
        update::ResourceTarget,
    },
    monitor_timestamp, optional_string,
};
use mungos::mongodb::bson::{doc, oid::ObjectId};

use crate::{auth::InnerRequestUser, helpers::resource::StateResource, state::State};

type OpenAlertMap = HashMap<ResourceTarget, HashMap<AlertDataVariant, Alert>>;

impl State {
    pub async fn alert_servers(&self) {
        let server_status = self.server_status_cache.get_list().await;
        let servers = self.get_all_servers_map().await;

        if let Err(e) = servers {
            error!("{e:#?}");
            return;
        }

        let mut servers = servers.unwrap();

        let alerts = self.get_open_alerts().await;

        if let Err(e) = alerts {
            error!("{e:#?}");
            return;
        }

        let alerts = alerts.unwrap();

        let mut alerts_to_open = Vec::<Alert>::new();
        let mut alert_ids_to_close = Vec::<String>::new();

        for v in server_status {
            let server = servers.remove(&v.id);
            if server.is_none() {
                continue;
            }
            let server = server.unwrap();
            let server_alerts = alerts.get(&ResourceTarget::Server(v.id.clone()));
            let health_alert = server_alerts
                .as_ref()
                .and_then(|alerts| alerts.get(&AlertDataVariant::ServerUnreachable));
            match (v.status, health_alert) {
                (ServerStatus::Ok | ServerStatus::Disabled, Some(health_alert)) => {
                    // resolve unreachable alert
                    alert_ids_to_close.push(health_alert.id.clone());
                }
                (ServerStatus::NotOk, None) => {
                    // open unreachable alert
                    let alert = Alert {
                        id: Default::default(),
                        ts: monitor_timestamp(),
                        resolved: false,
                        resolved_ts: None,
                        level: SeverityLevel::Critical,
                        target: ResourceTarget::Server(v.id.clone()),
                        variant: AlertDataVariant::ServerUnreachable,
                        data: AlertData::ServerUnreachable {
                            id: v.id.clone(),
                            name: server.name,
                            region: optional_string(&server.info.region),
                        },
                    };
                    alerts_to_open.push(alert);
                }
                _ => {}
            }
        }

        tokio::join!(
            self.open_alerts(alerts_to_open),
            self.resolve_alerts(&alert_ids_to_close)
        );
    }

    async fn open_alerts(&self, alerts: Vec<Alert>) {
        let open = || async {
            // self.db.alerters.create_many(alerts).await?;
            anyhow::Ok(())
        };

        let alert = || async { todo!() };

        let (res, _) = tokio::join!(open(), alert());

        if let Err(e) = res {
            error!("failed to create alerts on db | {e:#?}");
        }
    }

    async fn resolve_alerts(&self, alert_ids: &[String]) {
        let close = || async {
            let alert_ids = alert_ids
                .iter()
                .map(|id| ObjectId::from_str(id).context("failed to convert alert id to ObjectId"))
                .collect::<anyhow::Result<Vec<_>>>()?;
            self.db
                .alerts
                .update_many(
                    doc! { "_id": { "$in": alert_ids } },
                    doc! {
                        "$set": {
                            "resolved": "true",
                            "resolved_ts": monitor_timestamp()
                        }
                    },
                )
                .await
                .context("failed to resolve alerts on db")?;
            anyhow::Ok(())
        };

        let alert = || async {
            // alert that alert has be resolved
            todo!()
        };

        let (res, _) = tokio::join!(close(), alert());

        if let Err(e) = res {
            error!("failed to resolve alerts | {e:#?}");
        }
    }

    async fn get_open_alerts(&self) -> anyhow::Result<OpenAlertMap> {
        let alerts = self
            .db
            .alerts
            .get_some(doc! { "resolved": false }, None)
            .await
            .context("failed to get open alerts from db")?;

        let mut map = OpenAlertMap::new();

        for alert in alerts {
            let inner = map.entry(alert.target.clone()).or_default();
            inner.insert(alert.variant, alert);
        }

        Ok(map)
    }

    async fn get_all_servers_map(&self) -> anyhow::Result<HashMap<String, ServerListItem>> {
        let servers = <State as StateResource<Server>>::list_resources_for_user(
            self,
            None,
            &InnerRequestUser {
                is_admin: true,
                ..Default::default()
            }
            .into(),
        )
        .await
        .context("failed to get servers from db (in alert_servers)")?;

        let servers = servers
            .into_iter()
            .map(|server| (server.id.clone(), server))
            .collect::<HashMap<_, _>>();

        Ok(servers)
    }
}
