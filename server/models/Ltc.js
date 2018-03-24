// require config file
const db = require('../db/config')

// initiate model object
const Ltc = {}

// find all entries
Ltc.findAll = () => {
    return db.query(`SELECT * FROM ltc_data`)    
}

// find most recent entry
Ltc.findRecent = () => {
    return db.query(`SELECT * FROM ltc_data ORDER BY id DESC LIMIT 1`)
}

// create new entry
Ltc.create = (ltc) => {
    return db.one(`
    INSERT INTO ltc_data
    (time_made, usd, us_high, us_low, eur, eur_high, eur_low, trades, one_hour, one_day, one_week)
    
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
    `, [ltc.time_made, ltc.usd, ltc.us_high, ltc.us_low, ltc.eur, ltc.eur_high, ltc.eur_low,
         ltc.trades, ltc.one_hour, ltc.one_day, ltc.one_week])
}

module.exports = Ltc