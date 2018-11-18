const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');
const cartController = require('../controllers/cart');

router.get('/', shopController.index);
router.get('/products/:productId', shopController.detail);
router.get('/cart', cartController.viewCart);
router.post('/cart', cartController.addProductToCart);
router.post('/cart/:productId/delete', cartController.deleteProductFromCart);

module.exports = router;
