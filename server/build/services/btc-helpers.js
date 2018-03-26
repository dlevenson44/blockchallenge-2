'use strict';

require('isomorphic-fetch');
var db = require('../db/config');

// retrieve data from Cap Coin API
function getCapCoin(req, res, next) {
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD').then(function (res) {
        return res.json();
    })
    // use res.locals to attach data to response object
    .then(function (fetchRes) {
        res.locals.btcCapCoin = fetchRes;
        // insert into db
        db.query('\n            INSERT INTO cap_coin (\n                time_made,\n                usd,\n                one_hour,\n                one_day,\n                one_week,\n                crypto_id              \n            ) VALUES (\n                $1,\n                $2, \n                $3,\n                $4,\n                $5,\n                1\n            )\n            RETURNING *\n        ', [Date.now(), fetchRes[0].price_usd, fetchRes[0].percent_change_1h, fetchRes[0].percent_change_24h, fetchRes[0].percent_change_7d]); //[time, usd, oneHour, oneDay, oneWeek])
        next();
    }).catch(function (err) {
        res.json({ err: err });
    });
}

// retrieve data from Kraken
function getKraken(req, res, next) {
    fetch('https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD').then(function (res) {
        return res.json();
    })
    // use res.locals to attach data to resposne object
    .then(function (fetchRes) {
        res.locals.btcKraken = fetchRes;
        db.query('\n            INSERT INTO kraken (\n                time_made,\n                eur,\n                eur_low,\n                eur_high,\n                trades,\n                crypto_id\n            ) VALUES (\n                $1,\n                $2,\n                $3,\n                $4,\n                $5,\n                1\n            )\n            RETURNING *\n        ', [Date.now(), fetchRes.result.XXBTZCAD.o, fetchRes.result.XXBTZCAD.h[1], fetchRes.result.XXBTZCAD.l[1], fetchRes.result.XXBTZCAD.h[1]]);
        next();
    }).catch(function (err) {
        res.json({ err: err });
    });
}

// retrieve data from Poloniex
function getPolo(req, res, next) {
    fetch('https://poloniex.com/public?command=returnTicker').then(function (res) {
        return res.json();
    })
    // use res.locals to attach data to response object
    .then(function (fetchRes) {
        res.locals.btcPolo = fetchRes;
        db.query('\n            INSERT INTO polo (\n                time_made,\n                us_high,\n                us_low,\n                crypto_id\n            ) VALUES (\n                $1,\n                $2,\n                $3,\n                1\n            )\n            RETURNING *\n        ', [Date.now(), fetchRes.USDT_BTC.high24hr, fetchRes.USDT_BTC.low24hr]);
        next();
    }).catch(function (err) {
        res.json({ err: err });
    });
}

module.exports = {
    // getCoinDesk: getCoinDesk,
    getCapCoin: getCapCoin,
    getKraken: getKraken,
    getPolo: getPolo
};