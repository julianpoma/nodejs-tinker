const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

const productsData = require('./products');

router.get('/', (req, res, next) => {
	res.render('shop', {
        products: productsData.products,
        pageTitle: "Nodeshopee",
    });
});

module.exports = router;
