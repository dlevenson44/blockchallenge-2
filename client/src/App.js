import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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


// // import react dependencies and stylesheet
// import React, { Component } from 'react';
// import {BrowserRouter as Router, Route } from 'react-router-dom' 
// import './App.css';

// // import components
// import AltController from './components/AltController'
// import BtcController from './components/BtcController'
// import DashController from './components/DashController'
// import EthController from './components/EthController'
// import LtcController from './components/LtcController'
// import Nav from './components/Nav'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // checks to see if data has already been posted to db
//       dataSent: false,
//       // trigger when all fetches have run
//       fetchCheck: false,
//       // bitcoin/usd value
//       btcValue: 0,
//       // bitcoin market trends
//       btcCapCoin: {
//         oneHour: 0,
//         oneDay: 0,
//         oneWeek: 0                   
//       },
//       // bitcoin euro data 
//       btcKraken: {
//         eur: 0,
//         trends: {
//           low: 0,
//           high: 0,
//           trades: 0
//         }
//       },
//       // bitcoin us market data
//       btcPolo: {
//         high24hr: 0,
//         low24hr: 0,
//       },
//       // dash usd and market trend values
//       dashCapCoin: {
//         usd: 0,
//         trends: {
//           oneHour: 0,
//           oneDay: 0,
//           oneWeek: 0,
//         }
//       },
//       // dash euro data
//       dashKraken: {
//         eur: 0,
//         trends: {
//           low: 0,
//           high: 0,
//           trades: 0
//         }
//       },
//       // dash us data info
//       dashPolo: {
//         high24hr: 0,
//         low24hr: 0
//       },
//       // eth usd and market trend values
//       ethCapCoin: {
//         usd: 0,
//         trends: {
//           oneHour: 0,
//           oneDay: 0,
//           oneWeek: 0
//         }                    
//       },
//       // eth euro data
//       ethKraken: {
//         eur: 0,
//         trends: {
//           low: 0,
//           high: 0,
//           trades: 0
//         }
//       },
//       // eth us data info
//       ethPolo: {
//         high24hr: 0,
//         low24hr: 0
//       },
//       // ltc usd and market trend values
//       ltcCapCoin: {
//         usd: 0,
//         trends: {
//           oneHour: 0,
//           oneDay: 0,
//           oneWeek: 0
//         }                    
//       },
//       // ltc euro data
//       ltcKraken: {
//       eur: 0,
//         trends: {
//           low: 0,
//           high: 0,
//           trades: 0
//         }
//       },
//       // ltc us data info
//       ltcPolo: {
//         high24hr: 0,
//         low24hr: 0
//       }, 
//     }
//     	// bind btcCoinDesk and renderChart functions
// 		this.btcCoinDesk = this.btcCoinDesk.bind(this)
//     // this.renderChart = this.renderChart.bind(this)
//     this.sendToDb = this.sendToDb.bind(this)
//   }
//   componentWillMount() {
//     this.btcCoinDesk()  
    
//   }
  
//     // first API fetch, get BTC USD via CoinDesk API
//   btcCoinDesk() {
//       fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json', {
//         method: 'GET'
//       }).then(res => res.json())
//       .then(res => {
//           this.setState({
//               btcValue: res.bpi.USD.rate,
//         })
//       })
//       // trigger next api call
//       this.btcCapCoin()
//     }
    
//     // second API fetch, get BTC trends via CoinCap
//     btcCapCoin() {
//       fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         // set state to fetched values
//         this.setState({                
//           btcCapCoin: {
//             oneHour: res[0].percent_change_1h,
//             oneDay: res[0].percent_change_24h,
//             oneWeek: res[0].percent_change_7d       
//           }
//         })
//       })
//       // trigger next API call
//       this.btcKraken()
//     }
  
//     // third API fetch, get EUR BTC data via Kraken
//     btcKraken() {
//       fetch('https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         // set state to fetched values
//         this.setState({
//           btcKraken: {
//             eur: res.result.XXBTZCAD.c[0],
//             trends: {
//               low: res.result.XXBTZCAD.l[1],
//               high: res.result.XXBTZCAD.h[1],
//               trades: res.result.XXBTZCAD.t[1]
//             }
//           }
//         })
//       })
//       // trigger next API call
//       this.btcPolo()
//     }
  
//     // fourth API fetch, get US BTC info via Poloniex
//     btcPolo() {
//       fetch('https://poloniex.com/public?command=returnTicker', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         // set state to fetched values
//         this.setState({
//           btcPolo: {
//             high24hr: res.USDT_BTC.high24hr,
//             low24hr: res.USDT_BTC.low24hr,
//           },
//           dashPolo: {
//             high24hr: res.USDT_DASH.high24hr,
//             low24hr: res.USDT_DASH.low24hr
//           },
//           ethPolo: {
//             high24hr: res.USDT_ETH.high24hr,
//             low24hr: res.USDT_ETH.low24hr
//           },
//           ltcPolo: {
//             high24hr: res.USDT_LTC.high24hr,
//             low24hr: res.USDT_LTC.low24hr
//           }
//         })
//       })
//       // trigger next API call
//       this.dashCapCoin()
//     }
  
//     // fifth API fetch, get DASH USD/trend values via CoinCap
//     dashCapCoin() {
//       fetch('https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         this.setState({                
//           dashCapCoin: {
//             usd: res[0].price_usd,
//             trends: {
//               oneHour: res[0].percent_change_1h,
//               oneDay: res[0].percent_change_24h,
//               oneWeek: res[0].percent_change_7d
//             }                    
//                 },
//         })
//       })
//       // trigger next api call
//       this.dashKraken()
//     }
  
//     // sixth API fetch, get DASH EUR values via Kraken
//     dashKraken() {
//       fetch('https://api.kraken.com/0/public/Ticker?pair=DASHEUR', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         this.setState({
//           dashKraken: {
//             eur: res.result.DASHEUR.c[0],
//             trends: {
//               low: res.result.DASHEUR.l[1],
//               high: res.result.DASHEUR.h[1],
//               trades: res.result.DASHEUR.t[1]
//             }
//           }
//         })
//       })
//       // trigger next api call
//       this.ethCapCoin()
//     }
  
//     // seventh API fetch, get ETH USD/trend values via CoinCap
//     ethCapCoin() {
//       fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         this.setState({                
//           ethCapCoin: {
//             usd: res[0].price_usd,
//             trends: {
//               oneHour: res[0].percent_change_1h,
//               oneDay: res[0].percent_change_24h,
//               oneWeek: res[0].percent_change_7d
//             }                    
//           }
//         })
//       })
//       // trigger next API call
//       this.ethKraken()
//     }
  
//     // eighth API fetch, get ETH EUR data via Kraken
//     ethKraken() {
//       fetch('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         this.setState({
//           ethKraken: {
//             eur: res.result.XETHZEUR.c[0],
//             trends: {
//               low: res.result.XETHZEUR.l[1],
//               high: res.result.XETHZEUR.h[1],
//               trades: res.result.XETHZEUR.t[1]
//             }
//           }
//         })
//       })
//       // trigger next API call
//       this.ltcCapCoin()
//     }
  
//     // ninth API fetch, get LTC USD/trend values via CoinCap
//     ltcCapCoin() {
//       fetch('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=USD', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         this.setState({                
//           ltcCapCoin: {
//             usd: res[0].price_usd,
//             trends: {
//               oneHour: res[0].percent_change_1h,
//               oneDay: res[0].percent_change_24h,
//               oneWeek: res[0].percent_change_7d
//             }                    
//           }
//         })
//       })
//       // trigger next API call
//       this.ltcKraken()
//     }
  
//     // final API fetch, get LTC EUR data via Kraken
//     ltcKraken() {
//       fetch('https://api.kraken.com/0/public/Ticker?pair=XLTCZUSD', {
//         method: 'GET',
//       }).then(res => res.json())
//       .then(res => {
//         this.setState({          
//           ltcKraken: {
//             eur: res.result.XLTCZUSD.c[0],
//             trends: {
//               low: res.result.XLTCZUSD.l[1],
//               high: res.result.XLTCZUSD.h[1],
//               trades: res.result.XLTCZUSD.t[1]
//             }
//           },
//           fetchCheck: true
//         })
//         this.sendToDb()
//         })
//   }
  
//   sendToDb() {
//     if (this.state.fetchCheck === true) {
//       fetch('/api/crypto', {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         method: 'POST',
//         body: JSON.stringify({
//           btc_usd: this.state.btcValue,
//           btc_one_hour: this.state.btcCapCoin.oneHour,
//           btc_24_hours: this.state.btcCapCoin.oneDay,
//           btc_7_days: this.state.btcCapCoin.oneWeek,
//           btc_eur: this.state.btcKraken.eur,
//           btc_eur_low: this.state.btcKraken.trends.low,
//           btc_eur_high: this.state.btcKraken.trends.high,
//           btc_trades: this.state.btcKraken.trends.trades,
//           btc_us_high: this.state.btcPolo.high24hr,
//           btc_us_low: this.state.btcPolo.low24hr,
//           dash_usd: this.state.dashCapCoin.usd,
//           dash_one_hour: this.state.dashCapCoin.trends.oneHour,
//           dash_24_hours: this.state.dashCapCoin.trends.oneDay,
//           dash_7_days: this.state.dashCapCoin.trends.oneWeek,
//           dash_eur: this.state.dashKraken.eur,
//           dash_eur_low: this.state.dashKraken.trends.low,
//           dash_eur_high: this.state.dashKraken.trends.high,
//           dash_trades: this.state.dashKraken.trends.trades,
//           dash_us_high: this.state.dashPolo.high24hr,
//           dash_us_low: this.state.dashPolo.low24hr,
//           eth_usd: this.state.ethCapCoin.usd,
//           eth_one_hour: this.state.ethCapCoin.trends.oneHour,
//           eth_24_hours: this.state.ethCapCoin.trends.oneDay,
//           eth_7_days: this.state.ethCapCoin.trends.oneWeek,
//           eth_eur: this.state.ethKraken.eur,
//           eth_eur_low: this.state.ethKraken.trends.low,
//           eth_eur_high: this.state.ethKraken.trends.high,
//           eth_trades: this.state.ethKraken.trends.trades,
//           eth_us_high: this.state.ethPolo.high24hr,
//           eth_us_low: this.state.ethPolo.low24hr,
//           ltc_usd: this.state.ltcCapCoin.usd,
//           ltc_one_hour: this.state.ltcCapCoin.trends.oneHour,
//           ltc_24_hours: this.state.ltcCapCoin.trends.oneDay,
//           ltc_7_days: this.state.ltcCapCoin.trends.oneWeek,
//           ltc_eur: this.state.ltcKraken.eur,
//           ltc_eur_low: this.state.ltcKraken.trends.low,
//           ltc_eur_high: this.state.ltcKraken.trends.high,
//           ltc_trades: this.state.ltcKraken.trends.trades,
//           ltc_us_high: this.state.ltcPolo.high24hr,
//           ltc_us_low: this.state.ltcPolo.low24hr,
//         }),
//       }).then(res => res.json())
//       .catch(err => console.log(err))  
//     }    
//   }

//   // <Route exact path='/portfolio' component={Home}/>

//   render() {
//     return (
//       <Router>
//       <div className="App">
//       <div className="container">
//         <h1>Crypto Tracker</h1>
//         <Nav />
//         <AltController />
//         <div>
//           <Route exact path = '/bitcoin' component={BtcController} />
//           <Route exact path = '/dash' component={DashController} />
//           <Route exact path = '/ethereum' component={EthController} />
//           <Route exact path = '/litecoin' component={LtcController} />
//         </div>      
//       </div>
//       </div>
//       </Router>
//     );
//   }
// }
// export default App;