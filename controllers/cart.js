const Product = require('../models/product');
const Cart = require('../models/cart');

exports.addProductToCart = (req, res, next) => {
    const id = req.body.productId;
    Product.findById(id, (product) => {
        Cart.addProduct(product);
    });
    res.redirect('/');
};
