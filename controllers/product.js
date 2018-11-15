const Product = require('../models/product');

exports.index = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('products/index', {
            products: products,
            pageTitle: "Nodeshopee",
        });
    });
}

exports.create = (req, res, next) => {
    res.render('products/create', {
        pageTitle: "Nodeshopee",
    })
}

exports.store = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}