import React from 'react'

const EthController = (props) => {
    return(
    <div className="crypto-container">
        <h5>Trends:</h5>
            <p>{(props.eth.trades).substring(0, 5)} trades in the last 24 hours</p>
            <p>{props.eth.oneHour}% change in last hour</p>
            <p>{props.eth.oneDay}% change in last 24 hours</p>
            <p>{props.eth.oneWeek}% change in last 7 days</p>                
        <h5>ETH US Market Info</h5>
            <p>${(props.eth.usd).substring(0, 6)} per ETH</p>
            <p>${(props.eth.usHigh).substring(0, 6)} is the 24 hour high</p>
            <p>${(props.eth.usLow).substring(0, 6)} is the 24 hour low</p>                            
        <h5>ETH EU Market Info</h5>
            <p>€{(props.eth.eur).substring(0, 6)} per ETH</p>
            <p>€{(props.eth.eurHigh).substring(0, 6)} is the 24 hour high</p>
            <p>€{(props.eth.eurLow).substring(0, 6)} is the 24 hour low</p>            
    </div>
    )
}

export default EthController