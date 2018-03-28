// import dependencies
import React, { Component } from 'react';

class CreateAddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
           private: '',
           public: '',
           address: '',
           wif: ''
        }
        this.createAddress = this.createAddress.bind(this)
    }

    componentWillMount() {
        this.createAddress()
    }

    createAddress(e) {
        fetch('https://api.blockcypher.com/v1/btc/test3/addrs', {
            method: 'POST',
        }).then(res => res.json())
        .then(res => {
            this.setState({
                private: res.private,
                public: res.public,
                address: res.address,
                wif: res.wif
            })
        })       
    }



    render() {
        return(
            <div>
                <h3>New BitCoin Address Info</h3>
                <h5>Below is the info for your newly created BitCoin address.  Please write this information down for your records, as we do not store any newly created address information.</h5>
                <h5>To create a new address, simply refresh the page and the information below will be updated accordingly.</h5>
                <div className="addy-info">
                <p>Address:  {this.state.address} </p>                
                <p>Public Key:   {this.state.public}   </p>
                <p>Private Key (Hex Encoded):  {this.state.private}  </p>
                <p>Private Key (Wif Encoded):   {this.state.wif} </p>                
                </div>
            </div>
        )
    }

}

export default CreateAddress