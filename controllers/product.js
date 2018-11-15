const products = [];

exports.create = (req, res, next) => {
    res.render('products/create', {
        pageTitle: "Nodeshopee",
    })
}

exports.store = (req, res, next) => {
    products.push(req.body);
    res.redirect('/');
}

exports.products = products;