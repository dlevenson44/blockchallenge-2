'use strict';

// import dependencies
var express = require('express');
var dashController = require('../controllers/dash-controller');
var dashHelpers = require('../services/dash-helpers');

// set router variable
var dashRouter = express.Router();

// set routes
dashRouter.post('/dash', dashHelpers.getCapCoin, dashHelpers.getKraken, dashHelpers.getPolo, dashController.create);
dashRouter.get('/dash', dashHelpers.getCapCoin, dashHelpers.getKraken, dashHelpers.getPolo, dashController.sendApiData);

module.exports = dashRouter;