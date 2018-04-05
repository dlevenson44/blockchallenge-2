// import dependency
import React, { Component } from 'react';

class DashController extends Component {
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
                    usd: this.props.dash.usd,
                    us_high: this.props.dash.usHigh,
                    us_low: this.props.dash.usLow,
                    eur: this.props.dash.eur,
                    eur_high: this.props.dash.eurHigh,
                    eur_low: this.props.dash.eurLow,
                    trades: this.props.dash.trades,
                    one_hour: this.props.dash.oneHour,
                    one_day: this.props.dash.oneDay,
                    one_week: this.props.dash.oneWeek,
                    crypto_id: 2
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
                <p>{this.props.dash.trades} trades in the last 24 hours</p>
                <p>{this.props.dash.oneHour}% change in last hour</p>
                <p>{this.props.dash.oneDay}% change in last 24 hours</p>
                <p>{this.props.dash.oneWeek}% change in last 7 days</p>                
            <h5>DASH US Market Info</h5>
                <p>${(this.props.dash.usd).substring(0, 8)} per DASH</p>
                <p>${(this.props.dash.usHigh).substring(0, 8)} is the 24 hour high</p>
                <p>${(this.props.dash.usLow).substring(0, 8)} is the 24 hour low</p>                            
            <h5>DASH EU Market Info</h5>
                <p>€{(this.props.dash.eur).substring(0, 8)} per DASH</p>
                <p>€{(this.props.dash.eurHigh).substring(0, 8)} is the 24 hour high</p>
                <p>€{(this.props.dash.eurLow).substring(0, 8)} is the 24 hour low</p>         
            </div>
        )
    }
}

export default DashController
