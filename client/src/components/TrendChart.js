import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'

class TrendChart extends Component {
    constructor(props) {
        super(props)
        console.log(this)
        this.state = {            
            chartData: {
                labels: ['BTC', 'Dash', 'ETH', 'LTC'],
                datasets: [
                    {
                        label: '1 Hour Trend',
                        data: [
                            this.props.btc.oneHour,
                            this.props.dash.oneHour,
                            this.props.eth.oneHour,
                            this.props.ltc.oneHour
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ]
                    },
                    {
                        label: '24 Hour Trend',
                        data: [
                            this.props.btc.oneDay,
                            this.props.dash.oneDay,
                            this.props.eth.oneDay,
                            this.props.ltc.oneDay
                        ],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                        ]
                    },
                    {
                        label: '7 Day Trend',
                        data: [
                            this.props.btc.oneWeek,
                            this.props.dash.oneWeek,
                            this.props.eth.oneWeek,
                            this.props.ltc.oneWeek
                        ],
                        backgroundColor: [
                            'rgba(75, 102, 102, 0.6)',
                            'rgba(75, 102, 102, 0.6)',
                            'rgba(75, 102, 102, 0.6)',
                            'rgba(75, 102, 102, 0.6)',
                        ]
                    }
                ]
            }            
        }
    }

    render() {
        return(
            <div className="chart-container">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: 'BTC Value',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: "top"
                        }
                    }
                } />
            </div>
        )
    }
}

export default TrendChart