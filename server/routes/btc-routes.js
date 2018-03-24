// import dependencies
const express = require('express')
const btcController = require('../controllers/btc-controller')

// set router variable
const btcRouter = express.Router()

// set routes
btcRouter.get('/', btcController.latest)
btcRouter.post('/', btcController.create)

module.exports = btcRouter
