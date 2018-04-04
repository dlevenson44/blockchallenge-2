// import dependencies
const express = require('express')
const cryptoController = require('../controllers/crypto-controller')
const cryptoHelpers = require('../services/crypto-helpers')

// set router variable
const cryptoRouter = express.Router()

// set routes to fetch and store API data
// cryptoRouter.post('/crypto', cryptoController.create)
cryptoRouter.get('/crypto', cryptoHelpers.getData, cryptoController.sendApiData)

module.exports = cryptoRouter;