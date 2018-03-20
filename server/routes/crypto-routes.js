// import dependencies
const express = require('express')
const cryptoController = require('../controllers/crypto-controller')

// set router variable
const cryptoRouter = express.Router()

// set routes
cryptoRouter.get('/', cryptoController.latest)
cryptoRouter.post('/', cryptoController.create)

module.exports = cryptoRouter