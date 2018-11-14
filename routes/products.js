const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/products/create', (req, res, next) => {
	res.render('products/create', {
        pageTitle: "Nodeshopee",
    })
});

router.post('/products/create', (req, res, next) => {
    products.push(req.body);
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
