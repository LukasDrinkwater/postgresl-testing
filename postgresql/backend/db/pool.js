const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or whereever the db is hosted
  user: "lukas",
  database: "top_users",
  password: "password",
  port: 5432,
});

// or do replace all the props in connectionString: "connectionstring"
// connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
