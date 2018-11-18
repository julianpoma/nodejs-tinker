const Product = require('../models/product');
const Cart = require('../models/cart');

exports.viewCart = (req, res, next) => {
    Cart.getCart((cart) => {
        res.render('shop/cart', {
            cart: cart,
            pageTitle: 'My Cart'
        });
    });
};

exports.addProductToCart = (req, res, next) => {
	const id = req.body.productId;
	Product.findById(id, (product) => {
		Cart.addProduct(product);
	});
	res.redirect('/cart');
};


exports.deleteProductFromCart = (req, res, next) => {
	const id = req.params.productId;
	Product.findById(id, (product) => {
		Cart.deleteProduct(product);
	});
	res.redirect('/cart');
};
