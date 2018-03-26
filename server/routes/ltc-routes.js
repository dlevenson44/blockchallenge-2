// import dependencies
const express = require('express')
const ltcController = require('../controllers/ltc-controller')
const ltcHelpers = require('../services/ltc-helpers')

// set router variable
const ltcRouter = express.Router()

// set routes to fetch API data
ltcRouter.post('/ltc', ltcHelpers.getCapCoin, ltcHelpers.getKraken, ltcHelpers.getPolo, ltcController.create)
ltcRouter.get('/ltc', ltcHelpers.getCapCoin, ltcHelpers.getKraken, ltcHelpers.getPolo, ltcController.sendApiData)

// set routes to pass DB data to React
ltcRouter.get('/api/ltc', ltcController.latest)

module.exports = ltcRouter