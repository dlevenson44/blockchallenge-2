'use strict';

// import model
var Ltc = require('../models/Ltc');

// initiate controller object
var ltcController = {};

// pull all entries from table
ltcController.index = function (req, res, next) {
    Ltc.findAll().then(function (ltc) {
        res.json({
            message: 'retrieved data',
            data: { ltc: ltc }
        });
    }).catch(next);
};

// find latest entry
ltcController.latest = function (req, res, next) {
    Ltc.findRecent().then(function (ltc) {
        res.json({
            message: 'retrieved entry',
            data: { ltc: ltc }
        });
    }).catch(next);
};

// create new entry
ltcController.create = function (req, res) {
    console.log(req.body, 'from ltccontroller#create');
    Ltc.create({
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
    });
};

module.exports = ltcController;