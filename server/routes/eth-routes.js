// import dependencies
const express = require('express')
const ethController = require('../controllers/eth-controller')
const ethHelpers = require('../services/eth-helpers')

// set router variable
const ethRouter = express.Router()

// set routes to fetch api data
ethRouter.post('/eth', ethHelpers.getCapCoin, ethHelpers.getKraken, ethHelpers.getPolo, ethController.create)
ethRouter.get('/eth', ethHelpers.getCapCoin, ethHelpers.getKraken, ethHelpers.getPolo, ethController.sendApiData)

// set routes to pass DB data to React
ethRouter.get('/api/eth', ethController.latest)

module.exports = ethRouter