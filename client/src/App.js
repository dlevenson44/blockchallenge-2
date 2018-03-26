// import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// import chart components
import ChartController from './components/ChartController'

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
      this.setState({
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
        puller: true
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
      console.log(res)
      this.setState({
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
      this.setState({
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
      this.setState({
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


  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
        <h1>Crypto Tracker</h1>
        <Nav />
        <AltController btc={this.state.btc.usd} dash={this.state.dash.usd}
          eth={this.state.eth.usd} ltc={this.state.ltc.usd} />
        <div>
        <Route exact path='/' render={() => <ChartController btc={this.state.btc} dash={this.state.dash}
        eth={this.state.eth} ltc={this.state.ltc} puller={this.state.puller} /> } />
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

