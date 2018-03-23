// import dependencies
const express = require('express')
const btcController = require('../controllers/btc-controller')
const btcHelpers = require('../services/btc-helpers')

// set router variable
const btcRouter = express.Router()

// set routes
// btcRouter.get('/btc', btcHelpers.getCoinDesk, btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.sendApiData)
btcRouter.post('/btc', btcHelpers.getCoinDesk, btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.create)
btcRouter.get('/btc', btcHelpers.getCoinDesk, btcController.sendApiData)

module.exports = btcRouter