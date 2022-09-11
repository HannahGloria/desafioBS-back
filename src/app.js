require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require('morgan');
//const mysql = require('mysql');
//const myConnection = require('express-myconnection');
const {createPool} = require('mysql');
const path = require('path');
const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env;

//import routes
const productRoutes = require('./routes/index');

// settings 
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev')); ///con morgan voy a saber que peticiones me mandan y cuanto tardan 

// app.use(myConnection(mysql, {
//     connectionLimit: 10,
//     host: DB_HOST,
//     database: DB_DATABASE,
//     user: DB_USER,
//     password:  DB_PASSWORD,
//     port: 3306
// },'single'))

const pool = createPool({
    connectionLimit: 10,
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password:  DB_PASSWORD,
    port: 3306
});

//routes
app.use('/', productRoutes);


//start the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})

//testing the server
// pool.query(`select * from bsale_test.product`, (err, result, fields) =>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })
