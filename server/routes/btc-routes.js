// import dependencies
const express = require('express')
const btcController = require('../controllers/btc-controller')
const btcHelpers = require('../services/btc-helpers')

// set router variable
const btcRouter = express.Router()

// set routes
// btcRouter.get('/', btcController.latest)
// btcRouter.get('/', btcHelpers.getCoinDesk, btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.sendApiData)
// btcRouter.post('/', btcController.create)

btcRouter.get('/btc', btcHelpers.getCoinDesk, btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.sendApiData)
// btcRouter.get('/kraken', btcHelpers.getKraken, btcController.sendApiData)
// btcRouter.get('/coindesk', btcHelpers.getPolo, btcController.sendApiData)

btcRouter.get('/', btcHelpers.getCoinDesk, btcHelpers.getCapCoin, btcHelpers.getKraken, btcHelpers.getPolo, btcController.index)

module.exports = btcRouter