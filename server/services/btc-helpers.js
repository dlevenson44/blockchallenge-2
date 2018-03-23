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
            ) ON CONFLICT DO NOTHING
            RETURNING *
        `, [btcUsd])
        next()
    }).catch(err => {
        res.json({err})
    })
}

// update existing movie
// Movie.update = (movie, id) => {
// 	return db.one(`
// 		UPDATE movies SET
// 		title = $1, 
// 		description = $2, 
// 		genre = $3,
// 		image = $4
// 		WHERE id = $5
// 		RETURNING *
// 		`, [movie.title, movie.description, movie.genre, movie.image, id]);
// }

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...

// retrieve data from Cap Coin API
function getCapCoin(req, res, next) {    
    fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.btcCapCoin = fetchRes
        // set btc trend values
        let oneHour = fetchRes[0].percent_change_1h
        let oneDay = fetchRes[0].percent_change_24h
        let oneWeek = fetchRes[0].percent_change_7d
        // insert into db
        db.query(`
            UPDATE btc_data SET(
                one_hour = $1,
                one_day = $2,
                one_week = $3                
            ) 
            RETURNING *
        `, [oneHour, oneDay, oneWeek])
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