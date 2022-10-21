const http = require('http');

const express = require('express');

const app = express();

// add this to be able to parse res.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    console.log('In another middleware');
    res.send(`<h1> Yooo!`);
});

app.get('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>`);
    // next(); // Allows the request to continue to the next middleware
});

app.post('/product', (req, res, next) => {
    console.log('Product Title is' + res.body.title);
    res.redirect('/');
});

app.listen(3000);