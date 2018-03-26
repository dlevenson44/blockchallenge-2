// import dependencies
const express = require('express')
const ethController = require('../controllers/eth-controller')
const ethHelpers = require('../services/eth-helpers')

// set router variable
const ethRouter = express.Router()

// set routes
ethRouter.post('/eth', ethHelpers.getCapCoin, ethHelpers.getKraken, ethHelpers.getPolo, ethController.create)
ethRouter.get('/eth', ethHelpers.getCapCoin, ethHelpers.getKraken, ethHelpers.getPolo, ethController.sendApiData)

module.exports = ethRouter