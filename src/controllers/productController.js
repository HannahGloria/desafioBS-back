const {json} = require('express');
const mysql = require('mysql');
const dbConnection = require('../db');


const getProducts = async (req, res, next) => {
    dbConnection.query('SELECT * FROM product', function(err, response){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(response)
        }
    })
}
const getProductsByCat = async (req, res, next) => {
    dbConnection.query('SELECT product.id, product.name, product.url_image, product.price, product.discount,  category.name as category_name FROM product INNER JOIN category ON product.category = category.id WHERE product.category = '+`${Number(req.params.id)}`, function (err, response){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(response)
        }
    })
    
}

const getProductsByName = async (req, res, next) =>{
    dbConnection.query('SELECT product.id, product.name, product.url_image, product.price, product.discount,  category.name as category_name FROM product INNER JOIN category ON product.category = category.id WHERE product.name LIKE' + `'%${req.params.name}%'`, function (err, response){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(response)
        }
    })
}


module.exports = {
    getProducts,
    getProductsByCat,
    getProductsByName
}