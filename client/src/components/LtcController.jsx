import React from 'react'

const LtcController = (props) => {
    return(
    <div className="crypto-container">
        <h5>Trends:</h5>
            <p>{(props.ltc.trades).substring(0, 5)} trades in the last 24 hours</p>
            <p>{props.ltc.oneHour}% change in last hour</p>
            <p>{props.ltc.oneDay}% change in last 24 hours</p>
            <p>{props.ltc.oneWeek}% change in last 7 days</p>                
        <h5>LTC US Market Info</h5>
            <p>${(props.ltc.usd).substring(0, 6)} per LTC</p>
            <p>${(props.ltc.usHigh).substring(0, 6)} is the 24 hour high</p>
            <p>${(props.ltc.usLow).substring(0, 6)} is the 24 hour low</p>                            
        <h5>LTC EU Market Info</h5>
            <p>€{(props.ltc.eur).substring(0, 6)} per LTC</p>
            <p>€{(props.ltc.eurHigh).substring(0, 6)} is the 24 hour high</p>
            <p>€{(props.ltc.eurLow).substring(0, 6)} is the 24 hour low</p>            
    </div>
    )
}

export default LtcController