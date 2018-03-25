require('isomorphic-fetch')
const db = require('../db/config')

// retrieve data from Cap Coin API
function getCapCoin(req, res, next) {    
    fetch('https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.dash = fetchRes
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
                2
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
    fetch('https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD')
    .then(res => res.json())
    // use res.locals to attach data to resposne object
    .then(fetchRes => {
        res.locals.dashKraken = fetchRes
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
                2
            )
            RETURNING *
        `, [Date.now(), fetchRes.result.DASHEUR.o, fetchRes.result.DASHEUR.h[1],
        fetchRes.result.DASHEUR.l[1], fetchRes.result.DASHEUR.h[1]])
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
        res.locals.dashPolo = fetchRes
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
                2
            )
            RETURNING *
        `, [Date.now(), fetchRes.USDT_DASH.high24hr, fetchRes.USDT_DASH.low24hr])
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