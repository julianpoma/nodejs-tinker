const Product = require('../models/product');

exports.index = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('products/index', {
			products: products,
			pageTitle: 'Nodeshopee'
		});
	});
};

exports.create = (req, res, next) => {
	res.render('products/create', {
		pageTitle: 'Nodeshopee'
	});
};

exports.store = (req, res, next) => {
	const title = req.body.title;
	const imageUrl = 'https://static.hsfiles.com/es/wp-content/gallery/libro-recetas-familia/libro-recetas-01.jpg';
	const price = req.body.price;
	const description = req.body.description;
	const product = new Product(title, imageUrl, description, price);
	product.save();
	res.redirect('/');
};

exports.edit = (req, res, next) => {
	const productId = req.params.productId;
	Product.findById(productId, (product) => {
		res.render('products/edit', {
			product: product,
			pageTitle: 'Edit Product'
		});
	});
};

exports.update = (req, res, next) => {};
