const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const productsData = require('./routes/products');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //This is by default

//Parses the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

//App routes
app.use('/admin', productsData.routes);
app.use(shopRoutes);

// Catch all un-handled routes
app.use((req, res, next) => {
	res.status(404).render('errors/404', { 
        pageTitle: 'Nodeshopee | Page Not Found',
        errorMessage: "Ooops. We couldn't find what you are looking for!"
    });
});

app.listen(3000);
