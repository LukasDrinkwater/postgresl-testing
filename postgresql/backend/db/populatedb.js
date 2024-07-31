#!/usr/bin/env node

// import env
require("dotenv").config();
const { Client } = require("pg");

const dbConnectionString = process.env.CONNECTION_STRING;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

console.log(process.env.PG_HOST);
console.log(process.env.PG_PORT);
console.log(process.env.PG_USER);
console.log(process.env.PG_PASSWORD);
console.log(process.env.PG_DATABASE);

async function main() {
  console.log("seeding...");
  const client = new Client({
    // connectionString: "postgresql://username:password@localhost:5432/top_users",
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    // ssl: true,
    ssl: {
      rejectUnauthorized: false, // Trust self-signed certificates
    },
  });
  try {
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

main();
