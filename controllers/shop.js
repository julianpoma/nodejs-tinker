const Product = require('../models/product');
const Cart = require('../models/cart');

exports.index = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/home', {
			products: products,
			pageTitle: 'Nodeshopee'
		});
	});
};

exports.getProduct = (req, res, next) => {
	const id = req.params.productId;
	Product.findById(id, (product) => {
		res.render('shop/product-detail', {
			product: product,
			pageTitle: 'Nodeshopee'
		});
	});
};

exports.addItemToCart = (req, res, next) => {
    const id = req.body.productId;
    Product.findById(id, (product) => {
        Cart.addProduct(product);
    });
    res.redirect('/');
};
