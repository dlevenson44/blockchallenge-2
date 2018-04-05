// import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// import address creation component
import CreateAddress from './components/CreateAddress'

// import chart components
import ChartController from './components/ChartController'
import BtcChart from './components/BtcChart'

// import  altcoin and nav components
import AltController from './components/AltController'
import BtcController from './components/BtcController'
import DashController from './components/DashController'
import EthController from './components/EthController'
import LtcController from './components/LtcController'
import Nav from './components/Nav'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // has data been fetched?
      fetched: false,
      // has alt per btc been calculated?
      calculated: false,
      // alt per btc values
      alt: {
        dash: 0,
        eth: 0,
        ltc: 0,
      },
      // btc values
      btc: {
        usd: '',
        usHigh: '',
        usLow: '',
        eur: '',
        eurHigh: '',
        eurLow: '',
        oneHour: '',
        oneDay: '',
        oneWeek: '',
        trades: ''
      },
      // dash values
      dash: {
        usd: '',
        usHigh: '',
        usLow: '',
        eur: '',
        eurHigh: '',
        eurLow: '',
        oneHour: '',
        oneDay: '',
        oneWeek: '',
        trades: ''
      },
      // eth values
      eth: {
        usd: '',
        usHigh: '',
        usLow: '',
        eur: '',
        eurHigh: '',
        eurLow: '',
        oneHour: '',
        oneDay: '',
        oneWeek: '',
        trades: ''
      },
      // ltc values
      ltc: {
        usd: '',
        usHigh: '',
        usLow: '',
        eur: '',
        eurHigh: '',
        eurLow: '',
        oneHour: '',
        oneDay: '',
        oneWeek: '',
        trades: ''
      },
    }
    // bind functions
    this.fetchData = this.fetchData.bind(this)
    this.renderChart = this.renderChart.bind(this)
  }

  componentWillMount() {
    this.fetchData()
  }

  // fetch data from APIs and set to state
  fetchData() {
    fetch('/crypto', {
      method: 'GET',
      mode: 'no-cors',
    }).then(res => res.json())
    .then(res => {
      console.log(res.data)
      this.setState({
        btc: {
          trades: res.data[1].result.XXBTZCAD.t[1],
          oneHour: res.data[0][0].percent_change_1h,
          oneDay: res.data[0][0].percent_change_24h,
          oneWeek: res.data[0][0].percent_change_7d,
          usd: res.data[0][0].price_usd,
          usHigh: res.data[8].USDT_BTC.high24hr,
          usLow: res.data[8].USDT_BTC.low24hr,
          eur: res.data[1].result.XXBTZCAD.c[0],
          eurLow: res.data[1].result.XXBTZCAD.l[1],
          eurHigh: res.data[1].result.XXBTZCAD.h[1],
        },
        dash: {
          trades:  res.data[3].result.DASHEUR.t[1],
          oneHour: res.data[2][0].percent_change_1h,
          oneDay: res.data[2][0].percent_change_24h,
          oneWeek: res.data[2][0].percent_change_7d,
          usd: res.data[2][0].price_usd,
					usHigh: res.data[8].USDT_DASH.high24hr,
					usLow: res.data[8].USDT_DASH.low24hr,
          eur: res.data[3].result.DASHEUR.c[0],
          eurLow: res.data[3].result.DASHEUR.l[1],
          eurHigh: res.data[3].result.DASHEUR.h[1]
        },
        eth: {
          trades:  res.data[5].result.XETHZEUR.t[1],
          oneHour: res.data[4][0].percent_change_1h,
          oneDay: res.data[4][0].percent_change_24h,
          oneWeek: res.data[4][0].percent_change_7d,
          usd: res.data[4][0].price_usd,
					usHigh: res.data[8].USDT_ETH.high24hr,
					usLow: res.data[8].USDT_ETH.low24hr,
          eur: res.data[5].result.XETHZEUR.c[0],
          eurLow: res.data[5].result.XETHZEUR.l[1],
          eurHigh: res.data[5].result.XETHZEUR.h[1]
        },
        ltc: {
          trades:  res.data[7].result.XLTCZUSD.t[1],
          oneHour: res.data[6][0].percent_change_1h,
          oneDay: res.data[6][0].percent_change_24h,
          oneWeek: res.data[6][0].percent_change_7d,
          usd: res.data[6][0].price_usd,
					usHigh: res.data[8].USDT_ETH.high24hr,
					usLow: res.data[8].USDT_ETH.low24hr,
          eur: res.data[7].result.XLTCZUSD.c[0],
          eurLow: res.data[7].result.XLTCZUSD.l[1],
          eurHigh: res.data[7].result.XLTCZUSD.h[1]
        },
        fetched: true
      })
    })
  }

  // calculate alt per BTC after all fetches have been made
  calculateData() {
    if ((this.state.fetched === true) && this.state.calculated === false) {
      // convert state from string to number
      let btc = parseFloat(this.state.btc.usd)
      let dash = parseFloat(this.state.dash.usd)
      let eth = parseFloat(this.state.eth.usd)
      let ltc = parseFloat(this.state.ltc.usd)
      // calculate alt per btc
      let dpb = (btc / dash)
      let epb = (btc / eth)
      let lpb = (btc / ltc)
      // set state to calculated values
      this.setState({
        alt: {
          dash: dpb,
          eth: epb,
          ltc: lpb
        },
        calculated: true,
      })
    }    
  }

  renderChart() {
    // render chart after alt per btc after it's been calculated
    if (this.state.calculated === true) {
      return(
        <div>
          <BtcChart alt={this.state.alt} />
        </div>
      )
    } else {
      return(
        <div>
          <p>loading</p>
        </div>
      )
    }
  }

  render() {
    this.calculateData()
    return (
      <Router>
        <div className="App">
        <div className="container">
        <h1>Crypto Tracker</h1>
        <Nav />
        <AltController btc={this.state.btc.usd} dash={this.state.dash.usd}
          eth={this.state.eth.usd} ltc={this.state.ltc.usd} />
          <div>
            <Route exact path='/' render={() => <ChartController renderChart={this.renderChart()} /> } />
            <Route path='/bitcoin' render={() => <BtcController btc={this.state.btc} fetched={this.state.fetched} /> } />
            <Route path='/dash' render={() => <DashController dash={this.state.dash} fetched={this.state.fetched} /> } />
            <Route path='/ethereum' render={() => <EthController eth={this.state.eth} fetched={this.state.fetched} /> } />
            <Route path='/litecoin' render={() => <LtcController ltc={this.state.ltc} fetched={this.state.fetched} /> } />
            <Route path='/create' render={() => <CreateAddress /> } />
          </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;