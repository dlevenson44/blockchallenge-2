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

// find most recent BTC entry
Crypto.findRecent = () => {
    return db.query(`
        SELECT usd, one_hour, one_day, one_week, eur,
        eur_low, eur_high, trades, us_high, us_low
        FROM cap_coin, kraken, polo
        WHERE cap_coin.crypto_id = 1
        AND kraken.crypto_id = 1
        AND polo.crypto_id = 1        
        ORDER BY cap_coin.id DESC LIMIT 1
    `)
}

// find most recent DASH entry
Crypto.findRecent = () => {
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

// find most recent ETH entry
Crypto.findRecent = () => {
    return db.query(`
        SELECT usd, one_hour, one_day, one_week, eur,
        eur_low, eur_high, trades, us_high, us_low
        FROM cap_coin, kraken, polo
        WHERE cap_coin.crypto_id = 3
        AND kraken.crypto_id = 3
        AND polo.crypto_id = 3        
        ORDER BY cap_coin.id DESC LIMIT 1
    `)
}

// find most recent LTC entry
Crypto.findRecent = () => {
    return db.query(`
        SELECT usd, one_hour, one_day, one_week, eur,
        eur_low, eur_high, trades, us_high, us_low
        FROM cap_coin, kraken, polo
        WHERE cap_coin.crypto_id = 4
        AND kraken.crypto_id = 4
        AND polo.crypto_id = 4        
        ORDER BY cap_coin.id DESC LIMIT 1
    `)
}

module.exports = Crypto