const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const cartController = require('../controllers/cart');

router.get('/', shopController.index);
router.get('/products/:productId', shopController.getProduct);
router.post('/cart', cartController.addProductToCart);

module.exports = router;
