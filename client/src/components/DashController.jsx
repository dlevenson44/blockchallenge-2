import React from 'react'

const DashController = (props) => {
    return(
    <div className="crypto-container">
        <h5>Trends:</h5>
            <p>{(props.dash.trades).substring(0, 5)} trades in the last 24 hours</p>
            <p>{props.dash.oneHour}% change in last hour</p>
            <p>{props.dash.oneDay}% change in last 24 hours</p>
            <p>{props.dash.oneWeek}% change in last 7 days</p>                
        <h5>DASH US Market Info</h5>
            <p>${(props.dash.usd).substring(0, 6)} per DASH</p>
            <p>${(props.dash.usHigh).substring(0, 6)} is the 24 hour high</p>
            <p>${(props.dash.usLow).substring(0, 6)} is the 24 hour low</p>                            
        <h5>DASH EU Market Info</h5>
            <p>€{(props.dash.eur).substring(0, 6)} per DASH</p>
            <p>€{(props.dash.eurHigh).substring(0, 6)} is the 24 hour high</p>
            <p>€{(props.dash.eurLow).substring(0, 6)} is the 24 hour low</p>            
    </div>
    )
}

export default DashController