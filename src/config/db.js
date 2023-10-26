import pg from "pg";
import { config } from "../config/env.js";
const { Client } = pg;

const client = new Client({
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: "Bank-Wallet",
  user: "postgres",
  password: config.DB_PASSWORD,
});

client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

export default client;
