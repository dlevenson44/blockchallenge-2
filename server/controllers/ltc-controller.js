// import model
const Ltc = require('../models/Ltc')

// initiate controller object
const ltcController = {}

// find latest entry
ltcController.latest = (req, res, next) => {
    Ltc.findRecent()
    .then(crypto => {
        res.json({
            message: 'retrieved entry',
            data: { crypto }
        })
    }).catch(next)
}

// send api data
ltcController.sendApiData = (req, res) => {
    res.json({
        message: 'data returned for LTC',
        ltcCapCoin: res.locals.ltcCapCoin,
        ltcKraken: res.locals.ltcKraken,
        ltcPolo: res.locals.ltcPolo
    })
}

// create new entry
ltcController.create = (req, res) => {
    console.log(req.body, ' req.body from ltcController#create')
    Ltc.create({
        // time made
        time_made: Date.now(),
        // ltc data
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

module.exports = ltcController