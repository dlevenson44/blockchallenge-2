// import dependency
import React, { Component } from 'react';

class DashController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usd: '' || this.props.dashCapCoin.usd,
            usHigh: '' || this.props.dashPolo.high24hr,
            usLow: '' || this.props.dashPolo.low24hr,
            eur: '' || this.props.dashKraken.eur,
            eurHigh: '' || this.props.dashKraken.trends.high,
            eurLow: ''|| this.props.dashKraken.trends.low,
            trades: '' || this.props.dashKraken.trends.trades,
            oneHour: '' || this.props.dashCapCoin.trends.oneHour,
            oneDay: '' || this.props.dashCapCoin.trends.oneHour,
            oneWeek: '' || this.props.dashCapCoin.trends.oneHour,
            fetchStatus: false,
            visited: false,
        }
        // this.getData = this.getData.bind(this)
        this.renderData = this.renderData.bind(this)
        this.sendToDb = this.sendToDb.bind(this)
    }

    componentDidUpdate() {
        this.renderData()
    }

    sendToDb() {        
        if (this.props.fetchCounter === 10) {
            fetch('/api/dash', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    usd: this.props.dashCapCoin.usd,
                    us_high: this.props.dashPolo.high24hr,
                    us_low: this.props.dashPolo.low24hr,
                    eur: this.props.dashKraken.eur,
                    eur_high: this.props.dashKraken.trends.high,
                    eur_low: this.props.dashKraken.trends.low,
                    trades: this.props.dashKraken.trends.trades,
                    one_hour: this.props.dashCapCoin.trends.oneHour,
                    one_day: this.props.dashCapCoin.trends.oneDay,
                    one_week: this.props.dashCapCoin.trends.oneWeek,
                }),
            }).then(res => res.json())
            .catch(err => console.log(err))
        }
        this.getData()
    }

    
    getData() {
        if (this.state.fetchStatus === false) {
            fetch('/api/dash')
            .then(res => res.json())
            .then(res => {
                // set state
                this.setState({
                    usd: res.data.dash[0].usd,
                    usHigh: res.data.dash[0].us_high,
                    usLow: res.data.dash[0].us_low,
                    eur: res.data.dash[0].eur,
                    eurHigh: res.data.dash[0].eur_high,
                    eurLow: res.data.dash[0].eur_low,
                    trades: res.data.dash[0].trades,
                    oneHour: res.data.dash[0].one_hour,
                    oneDay: res.data.dash[0].one_day,
                    oneWeek: res.data.dash[0].one_week,
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
            <h5>DASH US Market Info</h5>
                <p>${this.state.usd} per DASH</p>
                <p>${(this.state.usHigh)} is the 24 hour high</p>
                <p>${(this.state.usLow)} is the 24 hour low</p>                            
            <h5>DASH EU Market Info</h5>
                <p>€{(this.state.eur)} per DASH</p>
                <p>€{(this.state.eurHigh)} is the 24 hour high</p>
                <p>€{(this.state.eurLow)} is the 24 hour low</p>            
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

export default DashController



