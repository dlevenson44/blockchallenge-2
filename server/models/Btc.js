// require config file
const db = require('../db/config')

// initiate model object
const Btc = {}

// find all entries
Btc.findAll = () => {
    return db.query(`SELECT * FROM btc_data`)    
}

// find most recent entry
Btc.findRecent = () => {
    return db.query(`SELECT * FROM btc_data ORDER BY id DESC LIMIT 1`)
}

// create new entry
Btc.create = (btc) => {
    return db.one(`
    INSERT INTO btc_data
    (time_made, usd, us_high, us_low, eur, eur_high, eur_low, trades, one_hour, one_day, one_week)
    
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
    `, [btc.time_made, btc.usd, btc.us_high, btc.us_low, btc.eur, btc.eur_high, btc.eur_low,
         btc.trades, btc.one_hour, btc.one_day, btc.one_week])
}

module.exports = Btc