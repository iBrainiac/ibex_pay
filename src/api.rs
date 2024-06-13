use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Api {
    uri: String,
    api_key: String,
}
