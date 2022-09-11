const { Router } = require('express');
const express = require('express');
const router = Router();
const app = express();
//const productController = require('../controllers/productController');
const {getProdByCat} = require('../controllers/productController');

router.get('/', getProdByCat);


module.exports = app;