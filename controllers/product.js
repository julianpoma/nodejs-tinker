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
    const id = parseInt(Math.random() * 100000000).toString();
	const title = req.body.title;
	const imageUrl = 'https://static.hsfiles.com/es/wp-content/gallery/libro-recetas-familia/libro-recetas-01.jpg';
	const price = req.body.price;
	const description = req.body.description;
	const product = new Product(id, title, imageUrl, description, price);
	product.save();
    res.redirect('/admin/products');
};

exports.edit = (req, res, next) => {
	const productId = req.params.productId;
	Product.findById(productId, (product) => {
        if(!product) {
            res.redirect('/404');
        }
		res.render('products/edit', {
			product: product,
			pageTitle: 'Edit Product'
		});
	});
};

exports.update = (req, res, next) => {
    const id = req.params.productId;
    const title = req.body.title;
    const imageUrl = 'https://static.hsfiles.com/es/wp-content/gallery/libro-recetas-familia/libro-recetas-01.jpg';
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(id, title, imageUrl, description, price);
    product.update();
    res.redirect('/admin/products');
};

exports.delete = (req, res, next) => {
    const id = req.params.productId;
    Product.delete(id);
    res.redirect('/admin/products');
}
