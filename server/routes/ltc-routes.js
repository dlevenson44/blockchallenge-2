// import dependencies
const express = require('express')
const ltcController = require('../controllers/ltc-controller')
const ltcHelpers = require('../services/ltc-helpers')

// set router variable
const ltcRouter = express.Router()

// set routes
ltcRouter.post('/ltc', ltcHelpers.getCapCoin, ltcHelpers.getKraken, ltcHelpers.getPolo, ltcController.create)
ltcRouter.get('/ltc', ltcHelpers.getCapCoin, ltcHelpers.getKraken, ltcHelpers.getPolo, ltcController.sendApiData)

module.exports = ltcRouter