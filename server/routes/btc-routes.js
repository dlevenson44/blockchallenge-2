// import dependencies
const express = require('express')
const btcController = require('../controllers/btc-controller')
const btcHelpers = require('../services/btc-helpers')

// set router variable
const btcRouter = express.Router()

// set routes
btcRouter.get('/', btcController.latest)
btcRouter.post('/', btcHelpers.getCoinDesk, btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.create)

module.exports = btcRouter