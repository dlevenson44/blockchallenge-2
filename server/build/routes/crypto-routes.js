'use strict';

// import dependencies
var express = require('express');
var cryptoController = require('../controllers/crypto-controller');

// set router variable
var cryptoRouter = express.Router();

// set routes
cryptoRouter.get('/', cryptoController.latest);
cryptoRouter.post('/', cryptoController.create);

module.exports = cryptoRouter;