// require config file
const db = require('../db/config')

// initiate model object
const Eth = {}

// find all entries
Eth.findAll = () => {
    return db.query(`SELECT * FROM eth_data`)    
}

// find most recent entry
Eth.findRecent = () => {
    return db.query(`SELECT * FROM eth_data ORDER BY id DESC LIMIT 1`)
}

// create new entry
Eth.create = (eth) => {
    return db.one(`
    INSERT INTO eth_data
    (time_made, usd, us_high, us_low, eur, eur_high, eur_low, trades, one_hour, one_day, one_week)
    
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
    `, [eth.time_made, eth.usd, eth.us_high, eth.us_low, eth.eur, eth.eur_high, eth.eur_low,
         eth.trades, eth.one_hour, eth.one_day, eth.one_week])
}

module.exports = Eth