const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.index);
router.get('/products/:productId', shopController.getProduct);
router.post('/cart', shopController.addItemToCart);

module.exports = router;
