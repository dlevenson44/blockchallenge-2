import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

