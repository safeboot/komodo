use resolver_api::derive::Request;
use serde::{Deserialize, Serialize};
use typeshare::typeshare;

use crate::{
    entities::builder::{Builder, PartialBuilderConfig},
    MongoDocument,
};

//

#[typeshare]
#[derive(Serialize, Deserialize, Debug, Clone, Request)]
#[response(Builder)]
pub struct GetBuilder {
    pub id: String,
}

//

#[typeshare]
#[derive(Serialize, Deserialize, Debug, Clone, Request)]
#[response(Vec<Builder>)]
pub struct ListBuilders {
    pub query: Option<MongoDocument>,
}

//

#[typeshare]
#[derive(Serialize, Deserialize, Debug, Clone, Request)]
#[response(Builder)]
pub struct CreateBuilder {
    pub name: String,
    pub config: PartialBuilderConfig,
}

//

#[typeshare]
#[derive(Serialize, Deserialize, Debug, Clone, Request)]
#[response(Builder)]
pub struct CopyBuilder {
    pub name: String,
    pub id: String,
}

//

#[typeshare]
#[derive(Serialize, Deserialize, Debug, Clone, Request)]
#[response(Builder)]
pub struct DeleteBuilder {
    pub id: String,
}

//

#[typeshare]
#[derive(Serialize, Deserialize, Debug, Clone, Request)]
#[response(Builder)]
pub struct UpdateBuilder {
    pub id: String,
    pub config: PartialBuilderConfig,
}
