// require config file
const db = require('../db/config')

// initiate model object
const Crypto = {}

// create new entry
Crypto.create = (crypto) => {
    return db.one(`
        INSERT INTO tracked_data
        (crypto_id, time_made, trades, one_hour, one_day, one_week, usd, us_high, us_low, eur, eur_high, eur_low)
        VALUES
        (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            $12
        ) RETURNING *
    `, [crypto.crypto_id, Date.now(), crypto.trades, crypto.one_hour, crypto.one_day, crypto.one_week, crypto.usd, crypto.us_high, crypto.us_low, crypto.eur, crypto.eur_high, crypto.eur_low])
}

module.exports = Crypto