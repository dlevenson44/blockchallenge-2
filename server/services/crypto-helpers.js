require('isomorphic-fetch')
const fetch = require('node-fetch')
const db = require('../db/config')
const async = require('async');
const fs = require('fs')

// list URLs
const links = ['https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD', 'https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=DASHEUR', 'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=XETHZEUR', 'https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=USD', 'https://api.kraken.com/0/public/Ticker?pair=XLTCZUSD', 'https://poloniex.com/public?command=returnTicker' ]


function getData() {
    for (let i = 0; i < links.length; i ++) { 
        fetch(links[i])
        .then(res => {
            res.json().then(json => {
                console.log(links[i], json)
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }
}


module.exports = {
    getData: getData,
}