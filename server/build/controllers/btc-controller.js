'use strict';

// import model
var Btc = require('../models/Btc');

// import helpers
// const btcHelpers = require('../serivces/btc-helpers')

// initiate controller object
var btcController = {};

// pull all entries from table
btcController.index = function (req, res, next) {
    Btc.findAll().then(function (crypto) {
        res.json({
            message: 'retrieved data',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// find latest entry
btcController.latest = function (req, res, next) {
    Btc.findRecent().then(function (crypto) {
        res.json({
            message: 'retrieved entry',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// send api data
btcController.sendApiData = function (req, res) {
    res.json({
        message: 'data returned for BTC',
        // btcCoinDesk: res.locals.btcCoinDesk,
        btcCapCoin: res.locals.btcCapCoin,
        btcKraken: res.locals.btcKraken,
        btcPolo: res.locals.btcPolo
    });
    // console.log(res.locals, 'res.locals from btcController#sendApiData')
};

// create new entry
btcController.create = function (req, res) {
    console.log(req.body, ' req.body from btcController#create');
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
        seven_days: req.body.Seven_days
    });
};

btcController.index = function (req, res) {
    res.render('index', {
        // btcCoinDesk: res.locals.btcCoinDesk,
        btcCapCoin: res.locals.btcCapCoin,
        btcKraken: res.locals.btcKraken,
        btcPolo: res.locals.btcPolo
    });
};

module.exports = btcController;