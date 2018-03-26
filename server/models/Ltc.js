// require config file
const db = require('../db/config')

// initiate model object
const Ltc = {}

// find all entries
Ltc.findAll = () => {
    return db.query(`SELECT * FROM tracked_data`)
}

// find most recent entry
Ltc.findRecent = () => {
    return db.query(`
        SELECT usd, one_hour, one_day, one_week, eur,
        eur_low, eur_high, trades, us_high, us_low
        FROM cap_coin, kraken, polo
        WHERE cap_coin.crypto_id = kraken.crypto_id
        ORDER BY cap_coin.id DESC LIMIT 1
    `)
}

module.exports = Ltc
