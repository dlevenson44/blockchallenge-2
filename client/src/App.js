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
		// this.renderChart = this.renderChart.bind(this)
  }
  componentWillMount() {
    this.btcCoinDesk()    
    }
  
    // first API fetch, get BTC USD via CoinDesk API
    btcCoinDesk() {
      fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json', {
        method: 'GET'
      }).then(res => res.json())
      .then(res => {
          // convert string to number data type logic
          let btcValueContainer = ''
          let fetchBtcValue = (res.bpi.USD.rate)
          for(let i = 0; i < fetchBtcValue.length - 1; i++ ) {
            // filter out comma's for larger amounts
            if (fetchBtcValue[i] !== (",")){
            btcValueContainer += fetchBtcValue[i]
            }	
          }
          // convert returned string into number
          let actualValue = parseFloat(btcValueContainer)
          // set state to nuber value
          this.setState({
              btcValue: actualValue,
        })
      })
      // trigger next api call
      this.btcCapCoin()
    }
    
    // second API fetch, get BTC trends via CoinCap
    btcCapCoin() {
      fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // set state to fetched values
        this.setState({                
          btcCapCoin: {
            oneHour: res[0].percent_change_1h,
            oneDay: res[0].percent_change_24h,
            oneWeek: res[0].percent_change_7d       
          }
        })
      })
      // trigger next API call
      this.btcKraken()
    }
  
    // third API fetch, get EUR BTC data via Kraken
    btcKraken() {
      fetch('https://api.kraken.com/0/public/Ticker?pair=XXBTZCAD', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // set state to fetched values
        this.setState({
          btcKraken: {
            eur: res.result.XXBTZCAD.c[0],
            trends: {
              low: res.result.XXBTZCAD.l[1],
              high: res.result.XXBTZCAD.h[1],
              trades: res.result.XXBTZCAD.t[1]
            }
          }
        })
      })
      // trigger next API call
      this.btcPolo()
    }
  
    // fourth API fetch, get US BTC info via Poloniex
    btcPolo() {
      fetch('https://poloniex.com/public?command=returnTicker', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // set state to fetched values
        this.setState({
          btcPolo: {
            high24hr: res.USDT_BTC.high24hr,
            low24hr: res.USDT_BTC.low24hr,
          },
          dashPolo: {
            high24hr: res.USDT_DASH.high24hr,
            low24hr: res.USDT_DASH.low24hr
          },
          ethPolo: {
            high24hr: res.USDT_ETH.high24hr,
            low24hr: res.USDT_ETH.low24hr
          },
          ltcPolo: {
            high24hr: res.USDT_LTC.high24hr,
            low24hr: res.USDT_LTC.low24hr
          }
        })
      })
      // trigger next API call
      this.dashCapCoin()
    }
  
    // fifth API fetch, get DASH USD/trend values via CoinCap
    dashCapCoin() {
      fetch('https://api.coinmarketcap.com/v1/ticker/dash/?convert=USD', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // convert string to number logic
        let dashValueContainer = ''
        let dashValue = res[0].price_usd
        for(let i = 0; i < dashValue.length -1; i++) {
          // filter out commas from new string
          if (dashValue[i] !== (",")) {
            dashValueContainer += dashValue[i]
          }
        }
        // convert string to number type
        let actualValue = parseFloat(dashValueContainer)
        // set state to number values
        this.setState({                
          dashCapCoin: {
            usd: actualValue,
            trends: {
              oneHour: res[0].percent_change_1h,
              oneDay: res[0].percent_change_24h,
              oneWeek: res[0].percent_change_7d
            }                    
                },
        })
      })
      // trigger next api call
      this.dashKraken()
    }
  
    // sixth API fetch, get DASH EUR values via Kraken
    dashKraken() {
      fetch('https://api.kraken.com/0/public/Ticker?pair=DASHEUR', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // convert string data to numeric
        let dashValueContainer = ''
        let dashValue = res.result.DASHEUR.c[0]
        for(let i = 0; i < dashValue.length - 1; i++) {
          // filter out commas from new string
          if(dashValue[i] !== (",")) {
            dashValueContainer += dashValue[i]
          }
        }
        // convert new string to number type
        let actualValue = parseFloat(dashValueContainer)
        // set state to number values
        this.setState({
          dashKraken: {
            eur: actualValue,
            trends: {
              low: res.result.DASHEUR.l[1],
              high: res.result.DASHEUR.h[1],
              trades: res.result.DASHEUR.t[1]
            }
          }
        })
      })
      // trigger next api call
      this.ethCapCoin()
    }
  
    // seventh API fetch, get ETH USD/trend values via CoinCap
    ethCapCoin() {
      fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // convert string to number logic
        let ethValueContainer = ''
        let ethValue = res[0].price_usd
        for(let i = 0; i < ethValue.length - 1; i++ ) {
          // filter commas out of new string
          if(ethValue[i] !== (",")) {
            ethValueContainer += ethValue[i]
          }
        }
        // convert new string to number
        let actualValue = parseFloat(ethValueContainer)
        // set state to number value
        this.setState({                
          ethCapCoin: {
            usd: actualValue,
            trends: {
              oneHour: res[0].percent_change_1h,
              oneDay: res[0].percent_change_24h,
              oneWeek: res[0].percent_change_7d
            }                    
          }
        })
      })
      // trigger next API call
      this.ethKraken()
    }
  
    // eighth API fetch, get ETH EUR data via Kraken
    ethKraken() {
      fetch('https://api.kraken.com/0/public/Ticker?pair=XETHZEUR', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // convert string to number logic
        let ethValueContainer = ''
        let ethValue = res.result.XETHZEUR.c[0]
        for(let i = 0; i < ethValue.length - 1; i++ ) {
          // filter commas out from new string
          if(ethValue[i] !== (",")) {
            ethValueContainer += ethValue[i]
          }
        }
        // convert new string to number type
        let actualValue = parseFloat(ethValueContainer)
        // set state to number
        this.setState({
          ethKraken: {
            eur: actualValue,
            trends: {
              low: res.result.XETHZEUR.l[1],
              high: res.result.XETHZEUR.h[1],
              trades: res.result.XETHZEUR.t[1]
            }
          }
        })
      })
      // trigger next API call
      this.ltcCapCoin()
    }
  
    // ninth API fetch, get LTC USD/trend values via CoinCap
    ltcCapCoin() {
      fetch('https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=USD', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // convert string to number logic
        let ltcValueContainer = ''
        let ltcValue = res[0].price_usd
        for(let i = 0; i < ltcValue.length - 1; i ++ ) {
          // filter commas out of new string
          if (ltcValue[i] !== (",")) {
            ltcValueContainer += ltcValue[i]
          }
        }
        // convert new string to number type
        let actualValue = parseFloat(ltcValueContainer)
        // set state to number
        this.setState({                
          ltcCapCoin: {
            usd: actualValue,
            trends: {
              oneHour: res[0].percent_change_1h,
              oneDay: res[0].percent_change_24h,
              oneWeek: res[0].percent_change_7d
            }                    
          }
        })
      })
      // trigger next API call
      this.ltcKraken()
    }
  
    // tenth API fetch, get LTC EUR data via Kraken
    ltcKraken() {
      fetch('https://api.kraken.com/0/public/Ticker?pair=XLTCZUSD', {
        method: 'GET',
      }).then(res => res.json())
      .then(res => {
        // calculate alt per btc values
        let dashPerBtc = (this.state.btcValue / this.state.dashCapCoin.usd)
        let ethPerBtc = (this.state.btcValue / this.state.ethCapCoin.usd)
        let ltcPerBtc = (this.state.btcValue / this.state.ltcCapCoin.usd)
        // convert string to number logic
        let ltcValueContainer = ''
        let ltcValue = res.result.XLTCZUSD.c[0]
        for(let i = 0; i < ltcValue.length - 1; i ++ ) {
          // filter commas out of string
          if (ltcValue[i] !== (",")) {
            ltcValueContainer += ltcValue[i]
          }
        }
        // convert new string to number type
        let actualValue = parseFloat(ltcValueContainer)
        // set state to numbers
        this.setState({
          altPerBtc: {
            dash: dashPerBtc,
            eth: ethPerBtc,
            ltc: ltcPerBtc
          },
          ltcKraken: {
            eur: actualValue,
            trends: {
              low: res.result.XLTCZUSD.l[1],
              high: res.result.XLTCZUSD.h[1],
              trades: res.result.XLTCZUSD.t[1]
            }
          }
        })
        })
        // trigger chart render function
        // this.renderChart()
    }

  render() {
    console.log(this)
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}
export default App;