// import model
const Btc = require('../models/Btc')

// initiate controller object
const btcController = {}

// pull all entries from table
btcController.index = (req, res, next) => {
    Btc.findAll()
    .then(crypto => {
        res.json({
            message: 'retrieved data',
            data: { crypto }
        })
    })
    .catch(next)
}

// find latest entry
btcController.latest = (req, res, next) => {
    Btc.findRecent()
    .then(crypto => {
        res.json({
            message: 'retrieved entry',
            data: { crypto }
        })
    }).catch(next)
}

// create new entry
btcController.create = (req, res) => {
    console.log(req.body, 'from btcController#create')
    Btc.create({
        // time made
        time_made: Date.now(),
        // btc data
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
    })
}

module.exports = btcController