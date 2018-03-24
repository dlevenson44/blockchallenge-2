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
            visited: false,
        }
        // this.getData = this.getData.bind(this)
        // this.renderData = this.renderData.bind(this)
        this.sendToDb = this.sendToDb.bind(this)
    }

    sendToDb() {        
        if (this.props.fetchCounter === 10) {
            console.log(this.props)
            fetch('/api/btc', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    usd: this.props.btcValue,
                    us_high: this.props.btcPolo.high24hr,
                    us_low: this.props.btcPolo.low24hr,
                    eur: this.props.btcKraken.eur,
                    eur_high: this.props.btcKraken.trends.high,
                    eur_low: this.props.btcKraken.trends.low,
                    trades: this.props.btcKraken.trends.trades,
                    one_hour: this.props.btcCapCoin.oneHour,
                    one_day: this.props.btcCapCoin.oneDay,
                    one_week: this.props.btcCapCoin.oneWeek,
                }),
            }).then(res => res.json())
            .catch(err => console.log(err))
        }
    }

    render() {
        this.sendToDb()
        // {this.renderData()}
        // console.log(this.props)
        return(
            <div className="crypto-container">
                <h1>hello</h1>
            </div>
        )
    }
}

export default BtcController


    // getData() {
    //     if (this.state.fetchStatus === false) {
    //         fetch('/api/crypto')
    //         .then(res => res.json())
    //         .then(res => {
    //             // set state
    //             this.setState({
    //                 usd: res.data.crypto[0].btc_usd,
    //                 usHigh: res.data.crypto[0].btc_us_high,
    //                 usLow: res.data.crypto[0].btc_us_low,
    //                 eur: res.data.crypto[0].btc_eur,
    //                 eurHigh: res.data.crypto[0].btc_eur_high,
    //                 eurLow: res.data.crypto[0].btc_eur_low,
    //                 trades: res.data.crypto[0].btc_trades,
    //                 oneHour: res.data.crypto[0].btc_one_hour,
    //                 oneDay: res.data.crypto[0].btc_24_hours,
    //                 oneWeek: res.data.crypto[0].btc_7_days,
    //                 fetchStatus: true,
    //             })
    //         })
    //         .catch(err => console.log(err))
    //     }
    //     this.sendToDb()
    // }

    // renderData() {
    //     if (this.state.fetchStatus === true) {
    //         return(
    //             <div className="crypto-container">
    //             <h5>Trends:</h5>
    //                 <p>{this.state.trades} trades in the last 24 hours</p>
    //                 <p>{this.state.oneHour}% change in last hour</p>
    //                 <p>{this.state.oneDay}% change in last 24 hours</p>
    //                 <p>{this.state.oneWeek}% change in last 7 days</p>                
    //             <h5>BTC US Market Info</h5>
    //                 <p>${this.state.usd} per BTC</p>
    //                 <p>${(this.state.usHigh).substring(0, 8)} is the 24 hour high</p>
    //                 <p>${(this.state.usLow).substring(0, 8)} is the 24 hour low</p>                            
    //             <h5>BTC EU Market Info</h5>
    //                 <p>€{(this.state.eur).substring(0, 8)} per BTC</p>
    //                 <p>€{(this.state.eurHigh).substring(0, 8)} is the 24 hour high</p>
    //                 <p>€{(this.state.eurLow).substring(0, 8)} is the 24 hour low</p>            
    //         </div>
    //         )

    //     } else {
    //         return(
    //             <div>
    //                 <p>Loading Data</p>
    //             </div>
    //         )
    //     }
        
    // }
