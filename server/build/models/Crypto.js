'use strict';

// require config file
var db = require('../db/config');

// initiate model object
var Crypto = {};

// find all entries
Crypto.findAll = function () {
    return db.query('SELECT * FROM tracked_data');
};

// find most recent entry
Crypto.findRecent = function () {
    return db.query('SELECT * FROM tracked_data ORDER BY id DESC LIMIT 1');
};

// create new entry
Crypto.create = function (crypto) {
    return db.one('\n        INSERT INTO tracked_data\n        (time_made, btc_usd, btc_us_high, btc_us_low, btc_eur, btc_eur_high, btc_eur_low, btc_trades, btc_one_hour, btc_24_hours, btc_7_days,\n        dash_usd, dash_us_high, dash_us_low, dash_eur, dash_eur_high, dash_eur_low, dash_trades, dash_one_hour, dash_24_hours, dash_7_days,\n        eth_usd, eth_us_high, eth_us_low, eth_eur, eth_eur_high, eth_eur_low, eth_trades, eth_one_hour, eth_24_hours, eth_7_days,\n        ltc_usd, ltc_us_high, ltc_us_low, ltc_eur, ltc_eur_high, ltc_eur_low, ltc_trades, ltc_one_hour, ltc_24_hours, ltc_7_days)\n        \n        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21,\n        $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41)\n        \n        RETURNING *\n    ', [crypto.time_made, crypto.btc_usd, crypto.btc_us_high, crypto.btc_us_low, crypto.btc_eur, crypto.btc_eur_high, crypto.btc_eur_low, crypto.btc_trades, crypto.btc_one_hour, crypto.btc_24_hours, crypto.btc_7_days, crypto.dash_usd, crypto.dash_us_high, crypto.dash_us_low, crypto.dash_eur, crypto.dash_eur_high, crypto.dash_eur_low, crypto.dash_trades, crypto.dash_one_hour, crypto.dash_24_hours, crypto.dash_7_days, crypto.eth_usd, crypto.eth_us_high, crypto.eth_us_low, crypto.eth_eur, crypto.eth_eur_high, crypto.eth_eur_low, crypto.eth_trades, crypto.eth_one_hour, crypto.eth_24_hours, crypto.eth_7_days, crypto.ltc_usd, crypto.ltc_us_high, crypto.ltc_us_low, crypto.ltc_eur, crypto.ltc_eur_high, crypto.ltc_eur_low, crypto.ltc_trades, crypto.ltc_one_hour, crypto.ltc_24_hours, crypto.ltc_7_days]);
};

module.exports = Crypto;