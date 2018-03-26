'use strict';

// import model
var Crypto = require('../models/Crypto');

// initiate controller object
var cryptoController = {};

// pull all entries from table
cryptoController.index = function (req, res, next) {
    Crypto.findAll().then(function (crypto) {
        res.json({
            message: 'retrieved data',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// find latest entry
cryptoController.latest = function (req, res, next) {
    Crypto.findRecent().then(function (crypto) {
        res.json({
            message: 'retrieved entry',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// create new entry
cryptoController.create = function (req, res) {
    console.log(req.body, 'from cryptocontroller#create');
    Crypto.create({
        // time made
        time_made: Date.now(),
        // btc data
        btc_usd: req.body.btc_usd,
        btc_us_high: req.body.btc_us_high,
        btc_us_low: req.body.btc_us_low,
        btc_eur: req.body.btc_eur,
        btc_eur_high: req.body.btc_eur_high,
        btc_eur_low: req.body.btc_eur_low,
        btc_trades: req.body.btc_trades,
        btc_one_hour: req.body.btc_one_hour,
        btc_24_hours: req.body.btc_24_hours,
        btc_7_days: req.body.btc_7_days,
        // dash data
        dash_usd: req.body.dash_usd,
        dash_us_high: req.body.dash_us_high,
        dash_us_low: req.body.dash_us_low,
        dash_eur: req.body.dash_eur,
        dash_eur_high: req.body.dash_eur_high,
        dash_eur_low: req.body.dash_eur_low,
        dash_trades: req.body.dash_trades,
        dash_one_hour: req.body.dash_one_hour,
        dash_24_hours: req.body.dash_24_hours,
        dash_7_days: req.body.dash_7_days,
        // eth data
        eth_usd: req.body.eth_usd,
        eth_us_high: req.body.eth_us_high,
        eth_us_low: req.body.eth_us_low,
        eth_eur: req.body.eth_eur,
        eth_eur_high: req.body.eth_eur_high,
        eth_eur_low: req.body.eth_eur_low,
        eth_trades: req.body.eth_trades,
        eth_one_hour: req.body.eth_one_hour,
        eth_24_hours: req.body.eth_24_hours,
        eth_7_days: req.body.eth_7_days,
        // ltc data
        ltc_usd: req.body.ltc_usd,
        ltc_us_high: req.body.ltc_us_high,
        ltc_us_low: req.body.ltc_us_low,
        ltc_eur: req.body.ltc_eur,
        ltc_eur_high: req.body.ltc_eur_high,
        ltc_eur_low: req.body.ltc_eur_low,
        ltc_trades: req.body.ltc_trades,
        ltc_one_hour: req.body.ltc_one_hour,
        ltc_24_hours: req.body.ltc_24_hours,
        ltc_7_days: req.body.ltc_7_days
    });
};

module.exports = cryptoController;