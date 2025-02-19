const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "dad_jokes",
});

db.connect((err) => {
  if (err) {
    console.error("Databse connection failed", err.message);
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = db;
