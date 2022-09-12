const {json} = require('express');
const mysql = require('mysql');
const dbConnection = require('../db');

const getAllCategories = async (req, res, next) => {
    dbConnection.query('SELECT * FROM category', function(err, response){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(response)
        }
    })
}

module.exports = {
    getAllCategories
}