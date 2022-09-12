//const controller = {};
const { json } = require('express/lib/response')
const mysql = require('mysql');
var request = require('request');
//const pool = require('../app');
const http = require('node:http');
const pool = new http.Agent('../app'); //Your pool/agent
http.request({hostname:'localhost', port:3000, path:'/', agent:pool});
request({url:"http://localhost:3000/", pool:pool });

// pool.query(`select * from bsale_test.product`, (err, result, fields) =>{
//         if(err){
//             return console.log(err);
//         }
//         return console.log(result);
//     })

const getProdByCat = async (req, res, next) => {
    try {
        const conexion = mysql.createConnection(pool);
        await conexion.connect(function(err){
            if(err){
                throw err;
            }else{
                conexion.query('SELECT * FROM product WHERE category = ' + mysql.escape(req.params.id)), function(err, response){
                    if(err){
                        conexion.end();
                        throw err;
                    }else{
                        console.log(response)
                        res.status(200).json({
                            message: 'Succesfull connection',
                            data: response
                        })
                    }
                }
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'Server error'
        })
    }
}

// controller.save = (req, res) => {
//     res.send('hello');
// }

// controller.delete = (req, res) => {
//     res.send('hello');
// }

//module.exports = controller;
module.exports = {
    getProdByCat
}