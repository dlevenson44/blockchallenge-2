// import dependencies
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const path = require('path')

// initiate app
const app = express()

// set up body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// set cookie parser
app.use(cookieParser())

// set logger
app.use(logger('dev'))

// set and initiate routes
const router = express.Router()
app.use(router)

// set and initiate port
app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})

// set routes here
app.use(express.static(path.join(__dirname, '../../client/build')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const cryptoRouter = require('./routes/crypto-routes')
app.use('/crypto', cryptoRouter)

// set error handler
app.use('*', (req, res) => {
	res.status(404).send('Invalid Page')
})