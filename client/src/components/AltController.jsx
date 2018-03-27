// import dependency
import React from 'react'

const AltController = (props) => {
    // convert props to number type
    let btc = parseFloat(props.btc)
    let dash = parseFloat(props.dash)
    let eth = parseFloat(props.eth)
    let ltc = parseFloat(props.ltc)
    
    // calculate alt per btc
    let dpb = (btc / dash)
    let epb = (btc / eth)
    let lpb = (btc / ltc)

    return(
        <div>
            <p>{(dpb).toPrecision(5)} DASH per BTC</p>
            <p>{(epb).toPrecision(5)} ETH per BTC</p>
            <p>{(lpb).toPrecision(5)} LTC per BTC</p>
        </div>
    )
}

export default AltController