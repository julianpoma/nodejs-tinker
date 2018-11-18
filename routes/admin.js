const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/products', productController.index);
router.get('/products/create', productController.create);
router.post('/products', productController.store);
router.get('/products/:productId/edit', productController.edit);
router.post('/products/:productId', productController.update);
router.post('/products/:productId/delete', productController.delete);

module.exports = router;