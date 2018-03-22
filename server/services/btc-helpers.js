require('isomorphic-fetch')

// retrieve data from Coin Desk API
function getCoinDesk(req, res, next) {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(res => res.json())
    // use res.locals to attach data to response object
    .then(fetchRes => {
        res.locals.btc = fetchRes
        next()
    })
}

module.exports = {
    getCoinDesk: getCoinDesk,
}