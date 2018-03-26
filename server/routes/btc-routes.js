// import dependencies
const express = require('express')
const btcController = require('../controllers/btc-controller')
const btcHelpers = require('../services/btc-helpers')

// set router variable
const btcRouter = express.Router()

// set routes to fetch API data
btcRouter.post('/btc', btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.create)
btcRouter.get('/btc', btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.sendApiData)

// set routes to pass DB data to React
btcRouter.get('/api/btc', btcController.latest)

module.exports = btcRouter