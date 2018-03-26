'use strict';

// import model
var Eth = require('../models/Eth');

// initiate controller object
var ethController = {};

// pull all entries from table
ethController.index = function (req, res, next) {
    th.findAll().then(function (crypto) {
        res.json({
            message: 'retrieved data',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// find latest entry
ethController.latest = function (req, res, next) {
    th.findRecent().then(function (crypto) {
        res.json({
            message: 'retrieved entry',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// send api data
ethController.sendApiData = function (req, res) {
    res.json({
        message: 'data returned for ETH',
        ethCapCoin: res.locals.ethCapCoin,
        ethKraken: res.locals.ethKraken,
        ethPolo: res.locals.ethPolo
    });
};

// create new entry
ethController.create = function (req, res) {
    console.log(req.body, ' req.body from ethController#create');
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
        seven_days: req.body.Seven_days
    });
};

ethController.index = function (req, res) {
    res.render('index', {
        ethCapCoin: res.locals.ethCapCoin,
        ethKraken: res.locals.ethKraken,
        ethPolo: res.locals.ethPolo
    });
};

module.exports = ethController;