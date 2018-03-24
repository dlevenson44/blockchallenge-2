// import model
const Btc = require('../models/Btc')

// initiate controller object
const btcController = {}

// pull all entries from table
btcController.index = (req, res, next) => {
    Btc.findAll()
    .then(btc => {
        res.json({
            message: 'retrieved data',
            data: { btc }
        })
    }).catch(next)
}

// create new entry
btcController.create = (req, res) => {
    console.log(req.body, 'from btccontroller#create')
    Btc.create({
        time_made: Date.now(),
        usd: req.body.usd,
        us_high: req.body.us_high,
        us_low: req.body.us_low,
        eur: req.body.eur,
        eur_high: req.body.eur_high,
        eur_low: req.body.eur_low,
        trades: req.body.trades,
        one_hour: req.body.one_hour,
        one_day: req.body.one_day,
        one_week: req.body.one_week
    })
}

module.exports = btcController