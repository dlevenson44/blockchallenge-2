// import model
const Eth = require('../models/Eth')

// initiate controller object
const ethController = {}

// pull all entries from table
ethController.index = (req, res, next) => {
    Eth.findAll()
    .then(crypto => {
        res.json({
            message: 'retrieved data',
            data: { crypto }
        })
    })
    .catch(next)
}

// find latest entry
ethController.latest = (req, res, next) => {
    Eth.findRecent()
    .then(crypto => {
        res.json({
            message: 'retrieved entry',
            data: { crypto }
        })
    }).catch(next)
}

// send api data
ethController.sendApiData = (req, res) => {
    res.json({
        message: 'data returned for ETH',
        ethCapCoin: res.locals.ethCapCoin,
        ethKraken: res.locals.ethKraken,
        ethPolo: res.locals.ethPolo
    })
}

// create new entry
ethController.create = (req, res) => {
    console.log(req.body, ' req.body from ethController#create')
    Eth.create({
        // time made
        time_made: Date.now(),
        // eth data
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

ethController.index = (req, res) => {
    res.render('index', {
        ethCapCoin: res.locals.ethCapCoin,
        ethKraken: res.locals.ethKraken,
        ethPolo: res.locals.ethPolo
    })
}

module.exports = ethController