// require config file
const db = require('../db/config')

// initiate model object
const Dash = {}

// find all entries
Dash.findAll = () => {
    return db.query(`SELECT * FROM tracked_data`)
}

// find most recent entry
Dash.findRecent = () => {
    return db.query(`
        SELECT usd, one_hour, one_day, one_week, eur,
        eur_low, eur_high, trades, us_high, us_low
        FROM cap_coin, kraken, polo
        WHERE cap_coin.crypto_id = 2
        AND kraken.crypto_id = 2
        AND polo.crypto_id = 2  
        ORDER BY cap_coin.id DESC LIMIT 1
    `)
}

module.exports = Dash
