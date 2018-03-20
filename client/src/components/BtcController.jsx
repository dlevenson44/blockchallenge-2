// import dependency
import React, { Component } from 'react';

class BtcController extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        this.getBtcData = this.getBtcData.bind(this)
    }

    getBtcData() {
        fetch('/api/crypto')
        .then(res => res.json())
        .then(res => {
            this.setState({
                usd: res.data.crypto[0].btc_usd,
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

    render() {
        this.getBtcData()
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default BtcController