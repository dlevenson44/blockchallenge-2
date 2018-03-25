// import model
const Btc = require('../models/Btc')

// import helpers
// const btcHelpers = require('../serivces/btc-helpers')

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

// send api data
btcController.sendApiData = (req, res) => {
    res.json({
        message: 'data returned for BTC',
        // btcCoinDesk: res.locals.btcCoinDesk,
        btcCapCoin: res.locals.btcCapCoin,
        btcKraken: res.locals.btcKraken,
        btcPolo: res.locals.btcPolo
    })
    // console.log(res.locals, 'res.locals from btcController#sendApiData')
}


btcController.index = (req, res) => {
    res.render('index', {
        // btcCoinDesk: res.locals.btcCoinDesk,
        btcCapCoin: res.locals.btcCapCoin,
        btcKraken: res.locals.btcKraken,
        btcPolo: res.locals.btcPolo
    })
}

module.exports = btcController