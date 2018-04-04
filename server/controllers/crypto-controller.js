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
    res.json({
        message: 'data returned for crypto',
        capCoin: res.locals.capCoin,
        kraken: res.locals.kraken,
        polo: res.locals.polo
    })    
}

// create new entry
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
        seven_days: req.body.Seven_days,
        crypto_id: req.body.crypto_id
    })
}


module.exports = cryptoController