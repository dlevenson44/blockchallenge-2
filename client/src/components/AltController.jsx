// import dependency
import React, { Component } from 'react'

class AltController extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            dash: 0,
            eth: 0,
            ltc: 0,
            fetchStatus: false,
        }
    }

    componentWillMount() {
        // if (this.state.btc === 0) {
            this.getData()
        // } 
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
                // set alt per btc to variable
                let dashPer = (btcContainer / dashContainer).toPrecision(4)
                let ethPer = (btcContainer / ethContainer).toPrecision(4)
                let ltcPer = (btcContainer / ltcContainer).toPrecision(4)
                // set state
                this.setState({
                    dash: dashPer,
                    eth: ethPer,
                    ltc: ltcPer,
                    fetchStatus: true
                })
            })
            .catch(err => console.log(err))
        }
    }


    render() {        
        return(
            <div className="hidden-sm-down">
                <nav>
                    <h5>AltCoin per BitCoin Values</h5>-
                    <p>{this.state.dash} DASH per BTC</p>
                    <p>{this.state.eth} ETH per BTC</p>
                    <p>{this.state.ltc} LTC per BTC</p>
                </nav>
            </div>
        )
    }
}

export default AltController