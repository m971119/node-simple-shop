const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>`);
    // next(); // Allows the request to continue to the next middleware
});

router.post('/product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;