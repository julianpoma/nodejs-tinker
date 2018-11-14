const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/products/create', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'products', 'create.html'));
});

router.post('/products/create', (req, res, next) => {
    products.push(req.body);
    console.log(products);
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
