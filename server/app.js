var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

var catalogsRouter = require('./modules/catalogs/routes/index');
var providersRouter = require('./modules/providers/routes/routesProviders');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/catalogs',catalogsRouter);
app.use('/providers',providersRouter);

module.exports = app;
