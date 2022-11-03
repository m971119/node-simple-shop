const http = require('http');
const path = require('path');

const express = require('express');

const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');
// Set where the views files are
app.set('views', 'views');

// add this to be able to parse res.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Serve Files statically
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);