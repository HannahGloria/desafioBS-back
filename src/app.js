const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {createPool} = require('mysql');
const path = require('path');
const app = express();

//middlewares
app.use(morgan('dev')); ///con morgan voy a saber que peticiones me mandan y cuanto tardan 
app.use(cors());
app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers","*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
}); 

//import routes
const productRoutes = require('./routes/index');

// settings 
app.set('port', process.env.PORT || 3000);

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
