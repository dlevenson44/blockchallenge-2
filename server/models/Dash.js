// require config file
const db = require('../db/config')

// initiate model object
const Dash = {}

// find all entries
Btc.findAll = () => {
    return db.query(`SELECT * FROM tracked_data`)
}

// find most recent entry
Btc.findRecent = () => {
    return db.query(`SELECT * FROM tracked_data ORDER BY id DESC LIMIT 1`)
}


module.exports = Btc
