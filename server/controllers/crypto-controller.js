// import model
const Crypto = require('../models/Crypto')

// initiate controller object
const cryptoController = {}

// find latest cap coin entry
cryptoController.latest = (req, res, next) => {
    Crypto.findRecent()
    .then(crypto => {
        res.json({
            message: 'retrieved entry',
            data: { crypto }
        })
    }).catch(next)
}

// send api data
cryptoController.sendApiData = (req, res) => { 
    console.log(res.locals)         
    res.json({
        message: 'data returned for crypto',            
        data: res.locals.data
    })  
}

// create new BTC entry
cryptoController.create = (req, res) => {
    console.log(req.body, ' req.body from cryptoController#create')
    Crypto.create({
        // time made
        time_made: Date.now(),
        // crypto data
        usd: req.body.usd,
        us_high: req.body.us_high,
        us_low: req.body.us_low,
        eur: req.body.eur,
        eur_high: req.body.eur_high,
        eur_low: req.body.eur_low,
        trades: req.body.trades,
        one_hour: req.body.one_hour,
        one_day: req.body.one_day,
        one_week: req.body.one_week,
        crypto_id: req.body.crypto_id
    })
}


module.exports = cryptoController