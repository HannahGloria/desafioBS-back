require("dotenv").config();
const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env;
const mysql = require('mysql')

const dbConnection = mysql.createPool({
    connectionLimit: 30,
    //connectTimeout  : 60 * 60 * 1000,
    //acquireTimeout  : 60 * 60 * 1000,
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password:  DB_PASSWORD,
    //port: 3000
});


module.exports = dbConnection;