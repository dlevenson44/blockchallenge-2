// import react dependencies and stylesheet
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom' 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      // altcoin per bitcoin value
      altPerBtc: {
        dash: 0,
        eth: 0,
        ltc: 0
      },
      // bitcoin/usd value
      btcValue: 0,
      // bitcoin market trends
      btcCapCoin: {
        oneHour: 0,
        oneDay: 0,
        oneWeek: 0                   
      },
      // bitcoin euro data 
      btcKraken: {
        eur: 0,
        trends: {
          low: 0,
          high: 0,
          trades: 0
        }
      },
      // bitcoin us market data
      btcPolo: {
        high24hr: 0,
        low24hr: 0,
      },
      // dash usd and market trend values
      dashCapCoin: {
        usd: 0,
        trends: {
          oneHour: 0,
          oneDay: 0,
          oneWeek: 0,
        }
      },
      // dash euro data
      dashKraken: {
        eur: 0,
        trends: {
          low: 0,
          high: 0,
          trades: 0
        }
      },
      // dash us data info
      dashPolo: {
        high24hr: 0,
        low24hr: 0
      },
      // eth usd and market trend values
      ethCapCoin: {
        usd: 0,
        trends: {
          oneHour: 0,
          oneDay: 0,
          oneWeek: 0
        }                    
      },
      // eth euro data
      ethKraken: {
        eur: 0,
        trends: {
          low: 0,
          high: 0,
          trades: 0
        }
      },
      // eth us data info
      ethPolo: {
        high24hr: 0,
        low24hr: 0
      },
      // ltc usd and market trend values
      ltcCapCoin: {
        usd: 0,
        trends: {
          oneHour: 0,
          oneDay: 0,
          oneWeek: 0
        }                    
      },
      // ltc euro data
      ltcKraken: {
      eur: 0,
        trends: {
          low: 0,
          high: 0,
          trades: 0
        }
      },
      // ltc us data info
      ltcPolo: {
        high24hr: 0,
        low24hr: 0
      }, 
    }
    	// bind btcCoinDesk and renderChart functions
		this.btcCoinDesk = this.btcCoinDesk.bind(this)
		this.renderChart = this.renderChart.bind(this)
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}
export default App;