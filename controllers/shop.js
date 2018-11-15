const Product = require('../models/product');

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
    Product.findById(id, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: 'Nodeshopee'
        });
    });

};
