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
            console.log(res)
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