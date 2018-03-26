// import dependencies
const express = require('express')
const ltcController = require('../controllers/ltc-controller')

// set router variable
const ltcRouter = express.Router()

// set routes
ltcRouter.get('/', ltcController.latest)
ltcRouter.post('/', ltcController.create)

module.exports = ltcRouter
