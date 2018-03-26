'use strict';

// import model
var Dash = require('../models/Dash');

// initiate controller object
var dashController = {};

// pull all entries from table
dashController.index = function (req, res, next) {
    Dash.findAll().then(function (crypto) {
        res.json({
            message: 'retrieved data',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// find latest entry
dashController.latest = function (req, res, next) {
    Dash.findRecent().then(function (crypto) {
        res.json({
            message: 'retrieved entry',
            data: { crypto: crypto }
        });
    }).catch(next);
};

// send api data
dashController.sendApiData = function (req, res) {
    res.json({
        message: 'data returned for Dash',
        dashCapCoin: res.locals.dashCapCoin,
        dashKraken: res.locals.dashKraken,
        dashPolo: res.locals.dashPolo
    });
};

// create new entry
dashController.create = function (req, res) {
    console.log(req.body, ' req.body from dashController#create');
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
        seven_days: req.body.Seven_days
    });
};

dashController.index = function (req, res) {
    res.render('index', {
        // dashCoinDesk: res.locals.dashCoinDesk,
        dashCapCoin: res.locals.dashCapCoin,
        dashKraken: res.locals.dashKraken,
        dashPolo: res.locals.dashPolo
    });
};

module.exports = dashController;