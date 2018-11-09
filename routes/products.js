const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'products', 'create.html'));
});

router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
