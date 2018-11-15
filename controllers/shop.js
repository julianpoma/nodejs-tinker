const Product = require('../models/product');

exports.index = (req, res, next) => {
    res.render('shop', {
        products: Product.fetchAll(),
        pageTitle: "Nodeshopee",
    });
};