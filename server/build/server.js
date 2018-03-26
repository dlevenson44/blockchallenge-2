'use strict';

// import dependencies
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var methodOverride = require('method-override');
var path = require('path');

// initiate app
var app = express();

// set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set cookie parser
app.use(cookieParser());

// set logger
app.use(logger('dev'));

// set and initiate routes
var router = express.Router();
app.use(router);

// set and initiate port
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), function () {
  console.log('Listening on ' + app.get('port'));
});

// set routes here
app.use(express.static(path.join(__dirname, '../../client/build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

var btcRouter = require('./routes/btc-routes');
app.use('/', btcRouter);

var dashRouter = require('./routes/dash-routes');
app.use('/', dashRouter);

var ethRouter = require('./routes/eth-routes');
app.use('/', ethRouter);

// const ltcRouter = require('./routes/ltc-routes')
// app.use('/', ltcRouter)

// set error handler
app.use('*', function (req, res) {
  res.status(404).send('Invalid Page');
});