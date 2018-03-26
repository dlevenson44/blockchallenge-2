'use strict';

// import dependencies
var express = require('express');
var ltcController = require('../controllers/ltc-controller');

// set router variable
var ltcRouter = express.Router();

// set routes
ltcRouter.get('/', ltcController.latest);
ltcRouter.post('/', ltcController.create);

module.exports = ltcRouter;