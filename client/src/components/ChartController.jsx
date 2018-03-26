import React, { Component } from 'react';

// import charts
import BtcChart from './BtcChart'
import DollarChart from './DollarChart'
import TrendChart from './TrendChart'

class ChartController extends Component {
    constructor(props) {
        super(props)
    }

    renderChart() {
        // if data has been pulled
        if (this.props.puller === true) {
            return(
                <div>
                    <BtcChart btc={this.props.btc.usd}
                    dash={this.props.dash.usd}
                    eth={this.props.eth.usd}
                    ltc={this.props.ltc.usd} />
                </div>
            )
        } else {
            return(
                <div>
                    <p>Loading Chart</p>
                </div>
            )
        }
    }

    renderChartDollar() {
        // if data has been pulled then render
        if (this.props.puller === true) {
            return(
                <div>
                    <DollarChart btc={this.props.btc}
                    dash={this.props.dash}
                    eth={this.props.eth}
                    ltc={this.props.ltc} />
                </div>
            )
        } else {
            return(
                <div>
                    <p>Loading Chart</p>
                </div>
            )
        }
    }

    renderChartTrend() {
        // if data has been pulled then render chart
        if (this.props.puller === true) {
            return(
                <div>
                    <TrendChart btc={this.props.btc.usd}
                    dash={this.props.dash.usd}
                    eth={this.props.eth.usd}
                    ltc={this.props.ltc.usd} />
                </div>
            )
        } else {
            return(
                <div>
                    <p>Loading Chart</p>
                </div>
            )
        }
    }
}

export default ChartController