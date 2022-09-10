require("dotenv").config();

const {createPool} = require('mysql');
const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env;

const pool = createPool({
    connectionLimit: 10,
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password:  DB_PASSWORD,
});

pool.query(`select * from bsale_test.product`, (err, result, fields) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

module.exports = pool;
