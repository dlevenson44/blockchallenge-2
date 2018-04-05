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
      // count how many fetches have been made
      fetcher: 0,
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
    // this.fetchBtc = this.fetchBtc.bind(this)
    this.fetchData = this.fetchData.bind(this)
    // this.renderChart = this.renderChart.bind(this)
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
        }
      })
    })
  }

  // calculate alt per BTC after all fetches have been made
  // calculateData() {
  //   if ((this.state.fetcher === 4) && this.state.calculated === false) {
  //     // convert state from string to number
  //     let btc = parseFloat(this.state.btc.usd)
  //     let dash = parseFloat(this.state.dash.usd)
  //     let eth = parseFloat(this.state.eth.usd)
  //     let ltc = parseFloat(this.state.ltc.usd)
  //     // calculate alt per btc
  //     let dpb = (btc / dash)
  //     let epb = (btc / eth)
  //     let lpb = (btc / ltc)
  //     // set state to calculated values
  //     this.setState({
  //       alt: {
  //         dash: dpb,
  //         eth: epb,
  //         ltc: lpb
  //       },
  //       calculated: true,
  //     })
  //   }    
  // }

  // renderChart() {
  //   // render chart after alt per btc after it's been calculated
  //   if (this.state.calculated === true) {
  //     return(
  //       <div>
  //         <BtcChart alt={this.state.alt} />
  //       </div>
  //     )
  //   } else {
  //     return(
  //       <div>
  //         <p>loading</p>
  //       </div>
  //     )
  //   }
  // }

  // <AltController btc={this.state.btc.usd} dash={this.state.dash.usd}
  // eth={this.state.eth.usd} ltc={this.state.ltc.usd} />

  // <div>
  // <Route exact path='/' render={() => <ChartController renderChart={this.renderChart()} /> } />
  // <Route path='/bitcoin' render={() => <BtcController btc={this.state.btc} /> } />
  // <Route path='/dash' render={() => <DashController dash={this.state.dash} /> } />
  // <Route path='/ethereum' render={() => <EthController eth={this.state.eth} /> } />
  // <Route path='/litecoin' render={() => <LtcController ltc={this.state.ltc} /> } />
  // <Route path='/create' render={() => <CreateAddress /> } />
  // </div>


  render() {
    // this.fetchData()
    // this.calculateData()
    return (
      <Router>
        <div className="App">
        <div className="container">
        <h1>Crypto Tracker</h1>
        <Nav />
        <p>altcontroller component goes here</p>
        <p>route div goes here</p>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;





// fetch BTC data from API
  // fetchBtc() {
  //     fetch('/btc', {
  //       method: 'GET',
  //       mode: 'no-cors',
  //     }).then(res => res.json())
  //     this.fetchDash()
  // }

  // // fetch DASH data from API
  // fetchDash() {
  //   fetch('/dash', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //   }).then(res => res.json())
  //   this.fetchEth()
  // }

  // // fetch ETH data from API
  // fetchEth() {
  //   fetch('/eth', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //   }).then(res => res.json())
  //   this.fetchLtc()
  // }

  // // fetch LTC data from API
  // fetchLtc() {
  //   fetch('/ltc', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //   }).then(res => res.json())
  //   this.getBtc()
  // }

  // // set BTC data to state
  // getBtc() {
  //   fetch('/api/btc', {
  //     method: 'GET',
  //   }).then(res => res.json())
  //   .then(res => {
  //     let fetch = (this.state.fetcher + 1)
  //     this.setState({
  //       fetcher: fetch,
  //       btc: {
  //         usd: res.data.crypto[0].usd,
  //         usHigh: res.data.crypto[0].us_high,
  //         usLow: res.data.crypto[0].us_low,
  //         eur: res.data.crypto[0].eur,
  //         eurHigh: res.data.crypto[0].eur_high,
  //         eurLow: res.data.crypto[0].eur_low,
  //         oneHour: res.data.crypto[0].one_hour,
  //         oneDay: res.data.crypto[0].one_day,
  //         oneWeek: res.data.crypto[0].one_week,
  //         trades: res.data.crypto[0].trades
  //       },
  //       counter: 0,
  //     })
  //   })
  //   this.getDash()
  // }

  // // set DASH data to state
  // getDash() {
  //   fetch('/api/dash', {
  //     method: 'GET',
  //   }).then(res => res.json())
  //   .then(res => {
  //     let fetch = (this.state.fetcher + 1)
  //     this.setState({
  //       fetcher: fetch,
  //       dash: {
  //         usd: res.data.crypto[0].usd,
  //         usHigh: res.data.crypto[0].us_high,
  //         usLow: res.data.crypto[0].us_low,
  //         eur: res.data.crypto[0].eur,
  //         eurHigh: res.data.crypto[0].eur_high,
  //         eurLow: res.data.crypto[0].eur_low,
  //         oneHour: res.data.crypto[0].one_hour,
  //         oneDay: res.data.crypto[0].one_day,
  //         oneWeek: res.data.crypto[0].one_week,
  //         trades: res.data.crypto[0].trades
  //       }
  //     })
  //   })
  //   this.getEth()
  // }
  
  // // set ETH data to state
  // getEth() {
  //   fetch('/api/eth', {
  //     method: 'GET',
  //   }).then(res => res.json())
  //   .then(res => {
  //     let fetch = (this.state.fetcher + 1)
  //     this.setState({
  //       fetcher: fetch,
  //       eth: {
  //         usd: res.data.crypto[0].usd,
  //         usHigh: res.data.crypto[0].us_high,
  //         usLow: res.data.crypto[0].us_low,
  //         eur: res.data.crypto[0].eur,
  //         eurHigh: res.data.crypto[0].eur_high,
  //         eurLow: res.data.crypto[0].eur_low,
  //         oneHour: res.data.crypto[0].one_hour,
  //         oneDay: res.data.crypto[0].one_day,
  //         oneWeek: res.data.crypto[0].one_week,
  //         trades: res.data.crypto[0].trades
  //       }
  //     })
  //   })
  //   this.getLtc()
  // }

  // // set LTC data to state
  // getLtc() {
  //   fetch('/api/ltc', {
  //     method: 'GET',
  //   }).then(res => res.json())
  //   .then(res => {
  //     let fetch = (this.state.fetcher + 1)
  //     this.setState({
  //       fetcher: fetch,
  //       ltc: {
  //         usd: res.data.crypto[0].usd,
  //         usHigh: res.data.crypto[0].us_high,
  //         usLow: res.data.crypto[0].us_low,
  //         eur: res.data.crypto[0].eur,
  //         eurHigh: res.data.crypto[0].eur_high,
  //         eurLow: res.data.crypto[0].eur_low,
  //         oneHour: res.data.crypto[0].one_hour,
  //         oneDay: res.data.crypto[0].one_day,
  //         oneWeek: res.data.crypto[0].one_week,
  //         trades: res.data.crypto[0].trades
  //       }
  //     })
  //   })    
  // }
