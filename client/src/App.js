// import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

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
      puller: false,
      fetcher: 0,
      calculated: false,
      alt: {
        dash: 0,
        eth: 0,
        ltc: 0,
      },
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
    this.fetchBtc = this.fetchBtc.bind(this)
    this.renderChart = this.renderChart.bind(this)
  }

  componentWillMount() {
    this.fetchBtc()
  }

  fetchBtc() {
      fetch('/btc', {
        method: 'GET',
        mode: 'no-cors',
      }).then(res => res.json())
      this.fetchDash()
  }

  fetchDash() {
    fetch('/dash', {
      method: 'GET',
      mode: 'no-cors',
    }).then(res => res.json())
    this.fetchEth()
  }

  fetchEth() {
    fetch('/eth', {
      method: 'GET',
      mode: 'no-cors',
    }).then(res => res.json())
    this.fetchLtc()
  }

  fetchLtc() {
    fetch('/ltc', {
      method: 'GET',
      mode: 'no-cors',
    }).then(res => res.json())
    this.getBtc()
  }

  getBtc() {
    if (this.state.puller === false) {
    fetch('/api/btc', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      let fetch = (this.state.fetcher + 1)
      this.setState({
        fetcher: fetch,
        btc: {
          usd: res.data.crypto[0].usd,
          usHigh: res.data.crypto[0].us_high,
          usLow: res.data.crypto[0].us_low,
          eur: res.data.crypto[0].eur,
          eurHigh: res.data.crypto[0].eur_high,
          eurLow: res.data.crypto[0].eur_low,
          oneHour: res.data.crypto[0].one_hour,
          oneDay: res.data.crypto[0].one_day,
          oneWeek: res.data.crypto[0].one_week,
          trades: res.data.crypto[0].trades
        },
        counter: 0,
      })
    })
    this.getDash()
    }
  }

  getDash() {
    fetch('/api/dash', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      let fetch = (this.state.fetcher + 1)
      this.setState({
        fetcher: fetch,
        dash: {
          usd: res.data.crypto[0].usd,
          usHigh: res.data.crypto[0].us_high,
          usLow: res.data.crypto[0].us_low,
          eur: res.data.crypto[0].eur,
          eurHigh: res.data.crypto[0].eur_high,
          eurLow: res.data.crypto[0].eur_low,
          oneHour: res.data.crypto[0].one_hour,
          oneDay: res.data.crypto[0].one_day,
          oneWeek: res.data.crypto[0].one_week,
          trades: res.data.crypto[0].trades
        }
      })
    })
    this.getEth()
  }

  getEth() {
    fetch('/api/eth', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      let fetch = (this.state.fetcher + 1)
      this.setState({
        fetcher: fetch,
        eth: {
          usd: res.data.crypto[0].usd,
          usHigh: res.data.crypto[0].us_high,
          usLow: res.data.crypto[0].us_low,
          eur: res.data.crypto[0].eur,
          eurHigh: res.data.crypto[0].eur_high,
          eurLow: res.data.crypto[0].eur_low,
          oneHour: res.data.crypto[0].one_hour,
          oneDay: res.data.crypto[0].one_day,
          oneWeek: res.data.crypto[0].one_week,
          trades: res.data.crypto[0].trades
        }
      })
    })
    this.getLtc()
  }

  getLtc() {
    fetch('/api/ltc', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      let fetch = (this.state.fetcher + 1)
      this.setState({
        fetcher: fetch,
        ltc: {
          usd: res.data.crypto[0].usd,
          usHigh: res.data.crypto[0].us_high,
          usLow: res.data.crypto[0].us_low,
          eur: res.data.crypto[0].eur,
          eurHigh: res.data.crypto[0].eur_high,
          eurLow: res.data.crypto[0].eur_low,
          oneHour: res.data.crypto[0].one_hour,
          oneDay: res.data.crypto[0].one_day,
          oneWeek: res.data.crypto[0].one_week,
          trades: res.data.crypto[0].trades
        }
      })
    })    
  }

  calculateData() {
    if ((this.state.fetcher === 4) && this.state.calculated === false) {
      console.log('calculating')
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
    // render chart after all fetchers made
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
        <Route path='/bitcoin' render={() => <BtcController btc={this.state.btc} /> } />
        <Route path='/dash' render={() => <DashController dash={this.state.dash} /> } />
        <Route path='/ethereum' render={() => <EthController eth={this.state.eth} /> } />
        <Route path='/litecoin' render={() => <LtcController ltc={this.state.ltc} /> } />

        </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;



  // <Route exact path='/' render={() => <ChartController btc={this.state.btc} dash={this.state.dash}
  //       eth={this.state.eth} ltc={this.state.ltc} puller={this.state.puller} /> } />