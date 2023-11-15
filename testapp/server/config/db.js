const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test@123",
  database: "railroad_sol",
});

module.exports = db;
