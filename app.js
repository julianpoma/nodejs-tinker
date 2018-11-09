const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products');
const shopRoutes = require('./routes/shop');

const app = express();

//Parses the request body
app.use(bodyParser.urlencoded({ extended: false }));

//App routes
app.use('/admin', productsRoutes);
app.use(shopRoutes);

// Catch all un-handled routes
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', 'errors', '404.html'));
});

app.listen(3000);
