const Product = require('../models/product');

exports.create = (req, res, next) => {
    res.render('products/create', {
        pageTitle: "Nodeshopee",
    })
}

exports.store = (req, res, next) => {
    let product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}