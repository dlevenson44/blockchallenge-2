// require config file
const db = require('../db/config')

// initiate model object
const Eth = {}

// find all entries
Eth.findAll = () => {
    return db.query(`SELECT * FROM tracked_data`)
}

// find most recent entry
Eth.findRecent = () => {
    return db.query(`SELECT * FROM tracked_data ORDER BY id DESC LIMIT 1`)
}


module.exports = Eth
