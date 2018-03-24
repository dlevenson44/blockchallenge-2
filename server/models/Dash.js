// require config file
const db = require('../db/config')

// initiate model object
const Dash = {}

// find all entries
Dash.findAll = () => {
    return db.query(`SELECT * FROM dash_data`)    
}

// find most recent entry
Dash.findRecent = () => {
    return db.query(`SELECT * FROM dash_data ORDER BY id DESC LIMIT 1`)
}

// create new entry
Dash.create = (dash) => {
    return db.one(`
    INSERT INTO dash_data
    (time_made, usd, us_high, us_low, eur, eur_high, eur_low, trades, one_hour, one_day, one_week)
    
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
    `, [dash.time_made, dash.usd, dash.us_high, dash.us_low, dash.eur, dash.eur_high, dash.eur_low,
         dash.trades, dash.one_hour, dash.one_day, dash.one_week])
}

module.exports = Dash