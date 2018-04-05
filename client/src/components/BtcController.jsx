// import dependency
import React, { Component } from 'react';

class BtcController extends Component {
    constructor(props) {
        super(props)
        // bind functions
        this.sendToDb = this.sendToDb.bind(this)
    }

    sendToDb() {   
        //  do not sent to DB until all API calls are ran, prevent 0 values from being entered
        console.log(this.props.fetched)
        if ((this.props.fetched === true)) {
            fetch('/crypto', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                // convert props to JSON string
                body: JSON.stringify({
                    usd: this.props.btc.usd,
                    us_high: this.props.btc.usHigh,
                    us_low: this.props.btc.usLow,
                    eur: this.props.btc.eur,
                    eur_high: this.props.btc.eurHigh,
                    eur_low: this.props.btc.eurLow,
                    trades: this.props.btc.trades,
                    one_hour: this.props.btc.oneHour,
                    one_day: this.props.btc.oneDay,
                    one_week: this.props.btc.oneWeek,
                    crypto_id: 1
                }),
            // send JSON response
            }).then(res => res.json())
            // catch errors
            .catch(err => console.log(err))
        }
    }

    render() {
        this.sendToDb()        
        return(
            <div className="crypto-container">
            <h5>Trends:</h5>
                <p>{this.props.btc.trades} trades in the last 24 hours</p>
                <p>{this.props.btc.oneHour}% change in last hour</p>
                <p>{this.props.btc.oneDay}% change in last 24 hours</p>
                <p>{this.props.btc.oneWeek}% change in last 7 days</p>                
            <h5>BTC US Market Info</h5>
                <p>${(this.props.btc.usd).substring(0, 8)} per BTC</p>
                <p>${(this.props.btc.usHigh).substring(0, 8)} is the 24 hour high</p>
                <p>${(this.props.btc.usLow).substring(0, 8)} is the 24 hour low</p>                            
            <h5>BTC EU Market Info</h5>
                <p>€{(this.props.btc.eur).substring(0, 8)} per BTC</p>
                <p>€{(this.props.btc.eurHigh).substring(0, 8)} is the 24 hour high</p>
                <p>€{(this.props.btc.eurLow).substring(0, 8)} is the 24 hour low</p>         
            </div>
        )
    }
}

export default BtcController
