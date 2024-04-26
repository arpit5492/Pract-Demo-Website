import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  password: process.env.PASSWORD,
  multipleStatements: true
});

export default pool;