const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "$aveDatmoney291",
  database: "employeems_db",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

module.exports = connection;
