// import dependency
import React, { Component } from 'react'

class AltController extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            btc: 0,
            dash: 0,
            eth: 0,
            ltc: 0,
            fetchStatus: false,
            perValue: {
                dash: 0,
                eth: 0,
                ltc: 0,
            }
        }
    }

    getData() {
        if (this.state.fetchStatus === false) {
            fetch('/api/crypto')
            .then(res => res.json())
            .then(res => {
                // calculate alt per btc values
                // convert btc_usd to number type
                let btcContainer = ''
                let btcValue = res.data.crypto[0].btc_usd
                for(let i = 0; i < btcValue.length -1; i++) {
                    // filter commas out of string
                    if(btcValue[i] !== (",")) {
                        btcContainer += btcValue[i]
                    }
                }
                // convert dash_usd to number type
                let dashContainer = ''
                let dashValue = res.data.crypto[0].dash_usd
                for(let i = 0; i < dashValue.length -1; i++) {
                    // filter commas out of string
                    if(dashValue[i] !== (",")) {
                        dashContainer += dashValue[i]
                    }
                }
                // convert eth_usd to number type
                let ethContainer = ''
                let ethValue = res.data.crypto[0].eth_usd
                for(let i = 0; i < ethValue.length -1; i++) {
                    // filter commas out of string
                    if(ethValue[i] !== (",")) {
                        ethContainer += ethValue[i]
                    }
                }
                // convert ltc_usd to number type
                let ltcContainer = ''
                let ltcValue = res.data.crypto[0].ltc_usd
                for(let i = 0; i < ltcValue.length -1; i++) {
                    // filter commas out of string
                    if(ltcValue[i] !== (",")) {
                        ltcContainer += ltcValue[i]
                    }
                }
                // convert string to number
                let btcUsd = parseFloat(btcContainer)
                let dashUsd = parseFloat(dashContainer)
                let ethUsd = parseFloat(ethContainer)
                let ltcUsd = parseFloat(ltcContainer)
                // set state
                this.setState({
                    btc: btcContainer,
                    dash: dashContainer,
                    eth: ethContainer,
                    ltc: ltcContainer,
                    fetchStatus: true
                })
            })
            .catch(err => console.log(err))
        }
    }
    // this.calculate
}

export default AltController