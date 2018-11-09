const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Hi!");
})

app.listen(3000);