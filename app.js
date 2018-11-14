const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const productsData = require('./routes/products');
const shopRoutes = require('./routes/shop');

const app = express();

//Parses the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

//App routes
app.use('/admin', productsData.routes);
app.use(shopRoutes);

// Catch all un-handled routes
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, 'views', 'errors', '404.html'));
});

app.listen(3000);
