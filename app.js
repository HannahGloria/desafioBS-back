const {createPool} = require('mysql');
//const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env;

const pool = createPool({
    connectionLimit: 10,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database: "bsale_test",
    user: "bsale_test",
    password: "bsale_test",
});

pool.query(`select * from bsale_test.product`, (err, result, fields) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

module.exports = pool;
