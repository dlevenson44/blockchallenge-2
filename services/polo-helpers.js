// import dependencies
require('isomorphic-fetch')
const db = require('./db/config')

function getPoloData(req, res, next) {
    fetch('https://poloniex.com/public?command=returnTicker')
    .then(fetchRes => fetchRes.json())
    .then(fetchRes => {
        console.log(fetchRes)
        next()
    })
}

module.exports = {
    getPoloData: getPoloData,
}