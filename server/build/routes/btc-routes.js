'use strict';

// import dependencies
var express = require('express');
var btcController = require('../controllers/btc-controller');
var btcHelpers = require('../services/btc-helpers');

// set router variable
var btcRouter = express.Router();

// set routes
btcRouter.post('/btc', btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.create);
btcRouter.get('/btc', btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.sendApiData);

module.exports = btcRouter;