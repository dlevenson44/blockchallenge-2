// require config file
const db = require('../db/config')

// initiate model object
const Btc = {}

// find all entries
Btc.findAll = () => {
    return db.query(`SELECT * FROM tracked_data`)
}

// find most recent entry
Btc.findRecent = () => {
    return db.query(`SELECT * FROM tracked_data ORDER BY id DESC LIMIT 1`)
}

// create new entry
Btc.create = (crypto) => {
    return db.one(`
        INSERT INTO tracked_data
        (time_made, usd, us_high, us_low, eur, eur_high, eur_low, 
            trades, one_hour, one_day, one_week)
        
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        
        RETURNING *
    `, [Btc.time_made, Btc.usd, Btc.us_high, Btc.us_low, Btc.eur, Btc.eur_high, Btc.eur_low,
        Btc.trades, Btc.one_hour, Btc.one_day, Btc.one_week])
}

module.exports = Btc
