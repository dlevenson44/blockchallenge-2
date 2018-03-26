import React from 'react'

const BtcController = (props) => {
    return(
    <div className="crypto-container">
        <h5>Trends:</h5>
            <p>{(props.btc.trades).substring(0, 5)} trades in the last 24 hours</p>
            <p>{props.btc.oneHour}% change in last hour</p>
            <p>{props.btc.oneDay}% change in last 24 hours</p>
            <p>{props.btc.oneWeek}% change in last 7 days</p>                
        <h5>BTC US Market Info</h5>
            <p>${(props.btc.usd).substring(0, 8)} per BTC</p>
            <p>${(props.btc.usHigh).substring(0, 8)} is the 24 hour high</p>
            <p>${(props.btc.usLow).substring(0, 8)} is the 24 hour low</p>                            
        <h5>BTC EU Market Info</h5>
            <p>€{(props.btc.eur).substring(0, 8)} per BTC</p>
            <p>€{(props.btc.eurHigh).substring(0, 8)} is the 24 hour high</p>
            <p>€{(props.btc.eurLow).substring(0, 8)} is the 24 hour low</p>            
    </div>
    )
}

export default BtcController