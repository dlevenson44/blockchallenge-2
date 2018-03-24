// import dependencies
const express = require('express')
const dashController = require('../controllers/dash-controller')

// set router variable
const dashRouter = express.Router()

// set routes
dashRouter.get('/', dashController.latest)
dashRouter.post('/', dashController.create)

module.exports = dashRouter
