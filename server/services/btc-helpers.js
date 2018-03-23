require('isomorphic-fetch')
const db = require('../db/config')

// retrieve data from Coin Desk API
function getCoinDesk(req, res, next) {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.btcCoinDesk = fetchRes
        // set btc USD value
        let btcUsd = fetchRes.bpi.USD.rate
        // insert into db
        db.query(`
            INSERT INTO btc_data (
                usd
            ) VALUES (
                $1
            ) RETURNING *
        `, [btcUsd])
        next()
    }).catch(err => {
        res.json({err})
    })
}

// retrieve data from Cap Coin API
function getCapCoin(req, res, next) {    
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.btcCapCoin = fetchRes
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
        res.locals.btcKraken = fetchRes
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
        res.locals.btcPolo = fetchRes
        next()
    }).catch(err => {
        res.json({err})
    })
}

module.exports = {
    getCoinDesk: getCoinDesk,
    getCapCoin: getCapCoin,
    getKraken: getKraken,
    getPolo: getPolo,
}