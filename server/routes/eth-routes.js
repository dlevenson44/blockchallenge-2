// import dependencies
const express = require('express')
const ethController = require('../controllers/eth-controller')

// set router variable
const ethRouter = express.Router()

// set routes
ethRouter.get('/', ethController.latest)
ethRouter.post('/', ethController.create)

module.exports = ethRouter
