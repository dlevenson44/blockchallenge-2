'use strict';

// import dependencies
var express = require('express');
var ethController = require('../controllers/eth-controller');
var ethHelpers = require('../services/eth-helpers');

// set router variable
var ethRouter = express.Router();

// set routes
ethRouter.post('/eth', ethHelpers.getCapCoin, ethHelpers.getKraken, ethHelpers.getPolo, ethController.create);
ethRouter.get('/eth', ethHelpers.getCapCoin, ethHelpers.getKraken, ethHelpers.getPolo, ethController.sendApiData);

module.exports = ethRouter;