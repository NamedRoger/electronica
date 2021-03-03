var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();

var catalogsRouter = require('./modules/catalogs/routes/index');
var providersRouter = require('./modules/providers/routes/routesProviders');
var providerObservationsRouter = require('./modules/providers/routes/routesObservation');
var providerNotesRouter = require('./modules/providers/routes/routesNotes');
var providerBanksRouter = require('./modules/providers/routes/routesBanks');
var customersRouter = require('./modules/customers/routes/routesCustomers');
var stockRouter = require('./modules/stock/routes/routesStock');
var productRouter = require('./modules/stock/routes/routerProductsProvider');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/catalogs',catalogsRouter);
app.use('/providers/',providerObservationsRouter);
app.use('/providers/',providerNotesRouter);
app.use('/providers/',providerBanksRouter);
app.use('/providers',providersRouter);
app.use('/customers',customersRouter);
app.use('/stock',productRouter);
app.use('/stock',stockRouter);
module.exports = app;
