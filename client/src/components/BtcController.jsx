// import dependency
import React, { Component } from 'react';

class BtcController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usd: '',
            usHigh: '',
            usLow: '',
            eur: '',
            eurHigh: '',
            eurLow: '',
            trades: '',
            oneHour: '',
            oneDay: '',
            oneWeek: '',
            fetchStatus: false,
            visited: false,
        }
        // this.getData = this.getData.bind(this)
        this.renderData = this.renderData.bind(this)
        this.sendToDb = this.sendToDb.bind(this)
    }

    sendToDb() {        
        if (this.props.fetchCounter === 10) {
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
        this.getData()
    }

    
    getData() {
        console.log('GETTING')
        if (this.state.fetchStatus === false) {
            fetch('/api/btc')
            .then(res => res.json())
            .then(res => {
                // set state
                this.setState({
                    usd: res.data.btc[0].usd,
                    usHigh: res.data.btc[0].us_high,
                    usLow: res.data.btc[0].us_low,
                    eur: res.data.btc[0].eur,
                    eurHigh: res.data.btc[0].eur_high,
                    eurLow: res.data.btc[0].eur_low,
                    trades: res.data.btc[0].trades,
                    oneHour: res.data.btc[0].one_hour,
                    oneDay: res.data.btc[0].one_day,
                    oneWeek: res.data.btc[0].one_week,
                    fetchStatus: true,
                })
            })
            .catch(err => console.log(err))
        }
        this.renderData()
    }

    renderData() {
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
    }

    render() {
        this.sendToDb()
        
        return(
            <div className="crypto-container">
                {this.renderData()}                
            </div>
        )
    }
}

export default BtcController



