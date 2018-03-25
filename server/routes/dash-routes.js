// import dependencies
const express = require('express')
const dashController = require('../controllers/dash-controller')
const dashHelpers = require('../services/dash-helpers')

// set router variable
const dashRouter = express.Router()

// set routes
dashRouter.post('/dash', dashHelpers.getCapCoin, dashHelpers.getKraken, dashHelpers.getPolo, dashController.create)
dashRouter.get('/dash', dashHelpers.getCapCoin, dashHelpers.getKraken, dashHelpers.getPolo, dashController.sendApiData)

module.exports = dashRouter