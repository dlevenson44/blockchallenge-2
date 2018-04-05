require('isomorphic-fetch')
const db = require('../db/config')

// list URLs
const links = ['https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD', 'https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=DASHEUR', 'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=XETHZEUR', 'https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=XLTCZUSD', 'https://poloniex.com/public?command=returnTicker']

// hold fetched data
const data = []

// get API data
function getData(req, res, next) {
    // map through links array
    let promises = links.map(function(link) {
        // run a function with each entry where we fetch the data
        return fetch(link).then(res => res.json())
    });
    // wait for the map to finish, and then assign the results to res.locals
    Promise.all(promises).then(results => {
        // res.locals.data is an array of link json
        res.locals.data = results;  
        next();
    }).catch(err => {
        // error handler
        res.status(500).json({err});
    });
}


module.exports = {
    getData: getData,
}