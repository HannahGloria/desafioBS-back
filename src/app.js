require("dotenv").config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const path = require('path');

//import routes
const productRoutes = require('./routes/index');

// settings 
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev')); ///con morgan voy a saber que peticiones me mandan y cuanto tardan 
const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD} = process.env;
app.use(myConnection(mysql, {
    connectionLimit: 10,
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password:  DB_PASSWORD,
    port: 3306
},'single'))

//routes
app.use('/', productRoutes);

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})
