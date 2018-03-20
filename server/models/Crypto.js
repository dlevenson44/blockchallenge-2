// require config file
const db = require('../db/config')

// initiate model object
const Crypto = {}

// find all entries
Crypto.findAll = () => {
    return db.query(`SELECT * FROM tracked_data`)
}

// find most recent entry
Crypto.findRecent = () => {
    return db.query(`SELECT TOP 1 * FROM tracked_data ORDER BY id DESC`)
}

// create new entry
Crypto.create = (crypto) => {
    return db.one(`
        INSERT INTO tracked_data
        (time_made, dash_per_btc, eth_per_btc, ltc_per_btc, btc_usd, btc_us_high, btc_us_low, btc_eur, btc_eur_high, btc_eur_low, btc_trades, btc_one_hour, btc_24_hours, btc_7_days,
        dash_usd, dash_us_high, dash_us_low, dash_eur, dash_eur_high, dash_eur_low, dash_trades, dash_one_hour, dash_24_hours, dash_7_days,
        eth_usd, eth_us_high, eth_us_low, eth_eur, eth_eur_high, eth_eur_low, eth_trades, eth_one_hour, eth_24_hours, eth_7_days,
        ltc_usd, ltc_us_high, ltc_us_low, ltc_eur, ltc_eur_high, ltc_eur_low, ltc_trades, ltc_one_hour, ltc_24_hours, ltc_7_days)
        
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21,
        $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44)
        
        RETURNING *
    `, [crypto.time_made, crypto.dash_per_btc, crypto.eth_per_btc, crypto.ltc_per_btc, 
        crypto.btc_usd, crypto.btc_us_high, crypto.btc_us_low, crypto.btc_eur, crypto.btc_eur_high, crypto.btc_eur_low, crypto.btc_trades, crypto.btc_one_hour, crypto.btc_24_hours, crypto.btc_7_days,
        crypto.dash_usd, crypto.dash_us_high, crypto.dash_us_low, crypto.dash_eur, crypto.dash_eur_high, crypto.dash_eur_low, crypto.dash_trades, crypto.dash_one_hour, crypto.dash_24_hours, crypto.dash_7_days,
        crypto.eth_usd, crypto.eth_us_high, crypto.eth_us_low, crypto.eth_eur, crypto.eth_eur_high, crypto.eth_eur_low, crypto.eth_trades, crypto.eth_one_hour, crypto.eth_24_hours, crypto.eth_7_days,
        crypto.ltc_usd, crypto.ltc_us_high, crypto.ltc_us_low, crypto.ltc_eur, crypto.ltc_eur_high, crypto.ltc_eur_low, crypto.ltc_trades, crypto.ltc_one_hour, crypto.ltc_24_hours, crypto.ltc_7_days])
}

module.exports = Crypto
