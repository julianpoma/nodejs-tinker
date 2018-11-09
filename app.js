const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("heh!");
    next()
})

app.use('/users', (req, res, next) => {
    res.send('<h1>Users list<h1>');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Dashboard<h1>');
})

app.listen(3000);