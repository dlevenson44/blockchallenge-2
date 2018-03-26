import React, { Component } from 'react';

// import charts
import BtcChart from './BtcChart'
import DollarChart from './DollarChart'
import TrendChart from './TrendChart'

class ChartController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alt: {
                btc: 0,
                dash: 0,
                eth: 0,
                ltc: 0
            },
            // check if alt per btc has been calculated
            calculated: false
        }
        // bind functions
        this.renderChart = this.renderChart.bind(this)
        this.renderChartDollar = this.renderChartDollar.bind(this)
        this.renderChartTrend = this.renderChartTrend.bind(this)
    }

    renderChart() {
        // if data has been pulled
        if (this.props.puller === true) {
            return(
                <div>
                    <BtcChart alt={this.state.alt} />
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
                    <TrendChart btc={this.props.btc}
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

    calculateData() {
        // make sure data's fetched
        if (this.state.calculated === false) {
            // convert props from string to number
            let btc = parseFloat(this.props.btc.usd)
            let dash = parseFloat(this.props.dash.usd)
            let eth = parseFloat(this.props.eth.usd)
            let ltc = parseFloat(this.props.ltc.usd)
            // calculate alt per btc value
            let dpb = (dash / btc)
            let epb = (eth / btc)
            let lpb = (ltc / btc)
            // set state to calculated values
            this.setState({
                altPerBtc: {
                    dashPerBtc: dpb,
                    ethPerBtc: epb,
                    ltcPerBtc: lpb,
                },
                calculated: true
            })
        }
    }

    render() {
        this.calculateData()
        return(
            <div>
                {this.renderChart()}
                {this.renderChartDollar()}
                {this.renderChartTrend()}
            </div>
        )
    }
}

export default ChartController