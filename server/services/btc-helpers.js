require('isomorphic-fetch')
const db = require('../db/config')

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
                1
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
        res.locals.btcKraken = fetchRes
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
                1
            )
            RETURNING *
        `, [Date.now(), fetchRes.result.XXBTZCAD.o, fetchRes.result.XXBTZCAD.h[0],
        fetchRes.result.XXBTZCAD.l[0], fetchRes.result.XXBTZCAD.h[0]])
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
        console.log(fetchRes)
        next()
    }).catch(err => {
        res.json({err})
    })
}

module.exports = {
    // getCoinDesk: getCoinDesk,
    getCapCoin: getCapCoin,
    getKraken: getKraken,
    getPolo: getPolo,
}