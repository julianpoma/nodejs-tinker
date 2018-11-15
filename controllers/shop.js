const products = require('./product');

exports.index = (req, res, next) => {
    res.render('shop', {
        products: products.products,
        pageTitle: "Nodeshopee",
    });
};