// import dependency
import React, { Component } from 'react';

class EthController extends Component {
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
                    usd: this.props.eth.usd,
                    us_high: this.props.eth.usHigh,
                    us_low: this.props.eth.usLow,
                    eur: this.props.eth.eur,
                    eur_high: this.props.eth.eurHigh,
                    eur_low: this.props.eth.eurLow,
                    trades: this.props.eth.trades,
                    one_hour: this.props.eth.oneHour,
                    one_day: this.props.eth.oneDay,
                    one_week: this.props.eth.oneWeek,
                    crypto_id: 3
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
                <p>{this.props.eth.trades} trades in the last 24 hours</p>
                <p>{this.props.eth.oneHour}% change in last hour</p>
                <p>{this.props.eth.oneDay}% change in last 24 hours</p>
                <p>{this.props.eth.oneWeek}% change in last 7 days</p>                
            <h5>ETH US Market Info</h5>
                <p>${(this.props.eth.usd).substring(0, 8)} per ETH</p>
                <p>${(this.props.eth.usHigh).substring(0, 8)} is the 24 hour high</p>
                <p>${(this.props.eth.usLow).substring(0, 8)} is the 24 hour low</p>                            
            <h5>ETH EU Market Info</h5>
                <p>€{(this.props.eth.eur).substring(0, 8)} per ETH</p>
                <p>€{(this.props.eth.eurHigh).substring(0, 8)} is the 24 hour high</p>
                <p>€{(this.props.eth.eurLow).substring(0, 8)} is the 24 hour low</p>         
            </div>
        )
    }
}

export default EthController
