const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/products/create', productController.create);

router.post('/products', productController.store);

exports.routes = router;