// import dependency
import React, { Component } from 'react';

class LtcController extends Component {
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
                    usd: this.props.ltc.usd,
                    us_high: this.props.ltc.usHigh,
                    us_low: this.props.ltc.usLow,
                    eur: this.props.ltc.eur,
                    eur_high: this.props.ltc.eurHigh,
                    eur_low: this.props.ltc.eurLow,
                    trades: this.props.ltc.trades,
                    one_hour: this.props.ltc.oneHour,
                    one_day: this.props.ltc.oneDay,
                    one_week: this.props.ltc.oneWeek,
                    crypto_id: 4
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
                <p>{this.props.ltc.trades} trades in the last 24 hours</p>
                <p>{this.props.ltc.oneHour}% change in last hour</p>
                <p>{this.props.ltc.oneDay}% change in last 24 hours</p>
                <p>{this.props.ltc.oneWeek}% change in last 7 days</p>                
            <h5>LTC US Market Info</h5>
                <p>${(this.props.ltc.usd).substring(0, 8)} per LTC</p>
                <p>${(this.props.ltc.usHigh).substring(0, 8)} is the 24 hour high</p>
                <p>${(this.props.ltc.usLow).substring(0, 8)} is the 24 hour low</p>                            
            <h5>LTC EU Market Info</h5>
                <p>€{(this.props.ltc.eur).substring(0, 8)} per LTC</p>
                <p>€{(this.props.ltc.eurHigh).substring(0, 8)} is the 24 hour high</p>
                <p>€{(this.props.ltc.eurLow).substring(0, 8)} is the 24 hour low</p>         
            </div>
        )
    }
}

export default LtcController
