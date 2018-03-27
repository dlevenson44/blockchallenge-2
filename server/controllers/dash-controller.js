// import model
const Dash = require('../models/Dash')

// initiate controller object
const dashController = {}

// find latest entry
dashController.latest = (req, res, next) => {
    Dash.findRecent()
    .then(crypto => {
        res.json({
            message: 'retrieved entry',
            data: { crypto }
        })
    }).catch(next)
}

// send api data
dashController.sendApiData = (req, res) => {
    res.json({
        message: 'data returned for Dash',
        dashCapCoin: res.locals.dashCapCoin,
        dashKraken: res.locals.dashKraken,
        dashPolo: res.locals.dashPolo
    })
}

// create new entry
dashController.create = (req, res) => {
    console.log(req.body, ' req.body from dashController#create')
    Dash.create({
        // time made
        time_made: Date.now(),
        // dash data
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

module.exports = dashController