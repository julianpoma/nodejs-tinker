const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //This is by default

//Parses the request body
app.use(bodyParser.urlencoded({ extended: false }));

//Make the public folder... public :D
app.use(express.static(path.join(rootDir, 'public')));

//App routes
app.use(shopRoutes);
app.use('/admin', adminRoutes);

// Catch all un-handled routes
app.use(errorController.show404);

app.listen(3000);
