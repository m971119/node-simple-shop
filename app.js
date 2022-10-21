const http = require('http');

const express = require('express');

const app = express();

// add this to be able to parse res.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(3000);