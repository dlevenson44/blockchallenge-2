require('isomorphic-fetch')
const db = require('../db/config')

// retrieve data from Cap Coin API
function getCapCoin(req, res, next) {    
    fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.ethCapCoin = fetchRes
        // insert into db
        db.query(`
            INSERT INTO cap_coin (
                time_made,
                usd,
                one_hour,
                one_day,
                one_week,
                crypto_id              
            ) VALUES (
                $1,
                $2, 
                $3,
                $4,
                $5,
                3
            )
            RETURNING *
        `, [Date.now(), fetchRes[0].price_usd, 
        fetchRes[0].percent_change_1h, fetchRes[0].percent_change_24h, fetchRes[0].percent_change_7d])  //[time, usd, oneHour, oneDay, oneWeek])
        next()
    }).catch(err => {
        res.json({err})
    })
}

// retrieve data from Kraken
function getKraken(req, res, next) {
    fetch('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR')
    .then(res => res.json())
    // use res.locals to attach data to resposne object
    .then(fetchRes => {
        res.locals.ethKraken = fetchRes
        db.query(`
            INSERT INTO kraken (
                time_made,
                eur,
                eur_low,
                eur_high,
                trades,
                crypto_id
            ) VALUES (
                $1,
                $2,
                $3,
                $4,
                $5,
                3
            )
            RETURNING *
        `, [Date.now(), fetchRes.result.XETHZEUR.o, fetchRes.result.XETHZEUR.h[1],
        fetchRes.result.XETHZEUR.l[1], fetchRes.result.XETHZEUR.h[1]])
        next()
    }).catch(err => {
        res.json({err})
    })
}

// retrieve data from Poloniex
function getPolo(req, res, next) {
    fetch('https://poloniex.com/public?command=returnTicker')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.ethPolo = fetchRes
        db.query(`
            INSERT INTO polo (
                time_made,
                us_high,
                us_low,
                crypto_id
            ) VALUES (
                $1,
                $2,
                $3,
                3
            )
            RETURNING *
        `, [Date.now(), fetchRes.USDT_ETH.high24hr, fetchRes.USDT_ETH.low24hr])
        next()
    }).catch(err => {
        res.json({err})
    })
}

module.exports = {
    getCapCoin: getCapCoin,
    getKraken: getKraken,
    getPolo: getPolo,
}