// import dependency
import React, { Component } from 'react';

class BtcController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dash_usd: 0,
            eth_usd: 0,
            ltc_usd: 0,
            usd: 0,
            usHigh: 0,
            usLow: 0,
            eur: 0,
            eurHigh: 0,
            eurLow: 0,
            trades: 0,
            oneHour: 0,
            oneDay: 0,
            oneWeek: 0,
            fetchStatus: false,
        }
        this.getData = this.getData.bind(this)
        this.renderData = this.renderData.bind(this)
    }

    getData() {
        if (this.state.fetchStatus === false) {
            console.log('fetched')
            fetch('/api/crypto')
            .then(res => res.json())
            .then(res => {
                // calculate alt per btc values
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
                // convert btc_usd to number type
                let btcContainer = ''
                let btcValue = res.data.crypto[0].btc_usd
                for(let i = 0; i < btcValue.length -1; i++) {
                    // filter commas out of string
                    if(btcValue[i] !== (",")) {
                        btcContainer += btcValue[i]
                    }
                }
                // convert string to number
                let dashUsd = parseFloat(dashContainer)
                let ethUsd = parseFloat(ethContainer)
                let ltcUsd = parseFloat(ltcContainer)
                let btcUsd = parseFloat(btcContainer)
                // set state
                this.setState({
                    dash_usd: res.data.crypto[0].dash_usd,
                    eth_usd: res.data.crypto[0].eth_usd,
                    ltc_usd: res.data.crypto[0].ltc_usd,
                    usd: btcUsd,
                    usHigh: res.data.crypto[0].btc_us_high,
                    usLow: res.data.crypto[0].btc_us_low,
                    eur: res.data.crypto[0].btc_eur,
                    eurHigh: res.data.crypto[0].btc_eur_high,
                    eurLow: res.data.crypto[0].btc_eur_low,
                    trades: res.data.crypto[0].btc_trades,
                    oneHour: res.data.crypto[0].btc_one_hour,
                    oneDay: res.data.crypto[0].btc_24_hours,
                    oneWeek: res.data.crypto[0].btc_7_days,
                    fetchStatus: true,
                })
            })
            .catch(err => console.log(err))
        }
    }

    renderData() {
        if (this.state.fetchStatus === true) {
            return(
                <div className="crypto-container">
                <h5>Trends:</h5>
                    <p>{this.state.trades} trades in the last 24 hours</p>
                    <p>{this.state.oneHour}% change in last hour</p>
                    <p>{this.state.oneDay}% change in last 24 hours</p>
                    <p>{this.state.oneWeek}% change in last 7 days</p>                
                <h5>BTC US Market Info</h5>
                    <p>${this.state.usd} per BTC</p>
                    <p>${(this.state.usHigh).substring(0, 8)} is the 24 hour high</p>
                    <p>${(this.state.usLow).substring(0, 8)} is the 24 hour low</p>                            
                <h5>BTC EU Market Info</h5>
                    <p>€{(this.state.eur).substring(0, 8)} per BTC</p>
                    <p>€{(this.state.eurHigh).substring(0, 8)} is the 24 hour high</p>
                    <p>€{(this.state.eurLow).substring(0, 8)} is the 24 hour low</p>            
            </div>
            )

        } else {
            return(
                <div>
                    <p>Loading Data</p>
                </div>
            )
        }
    }

    render() {
        this.getData()
        // console.log(this.state)
        return(
            <div>
                {this.renderData()}
            </div>
        )
    }
}

export default BtcController