const Product = require('../models/product');

exports.index = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/home', {
            products: products,
            pageTitle: "Nodeshopee",
        });
    });
};