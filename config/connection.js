console.log("This is where my sql connection goes");
const mysql = require('mysql2');
//require env file 
require('dotenv').config();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: '3306'
});

connection.connect(function (err) {
    if (err) throw err;
  });

module.exports = connection; 