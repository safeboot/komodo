use anyhow::Context;
use async_trait::async_trait;
use monitor_client::{
  api::read::{GetTag, ListTags},
  entities::{tag::Tag, user::User},
};
use mungos::find::find_collect;
use resolver_api::Resolve;

use crate::{db::db_client, helpers::get_tag, state::State};

#[async_trait]
impl Resolve<GetTag, User> for State {
  async fn resolve(
    &self,
    GetTag { tag }: GetTag,
    _: User,
  ) -> anyhow::Result<Tag> {
    get_tag(&tag).await
  }
}

#[async_trait]
impl Resolve<ListTags, User> for State {
  async fn resolve(
    &self,
    ListTags { query }: ListTags,
    _: User,
  ) -> anyhow::Result<Vec<Tag>> {
    find_collect(&db_client().await.tags, query, None)
      .await
      .context("failed to get tags from db")
  }
}
