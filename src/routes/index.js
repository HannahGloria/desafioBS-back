const { Router } = require('express');
//const express = require('express');
const router = Router();
//const app = express();
//const productController = require('../controllers/productController');
const {getProducts, getProductsByCat, getProductsByName} = require('../controllers/productController');
const {getAllCategories} = require('../controllers/categoryController');

router.use('/getProducts', getProducts);
router.use('/getCategories', getAllCategories);
router.use('/getProductsByCat/:id', getProductsByCat);
router.use('/getProductsByName/:name', getProductsByName)


module.exports = router;