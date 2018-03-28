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
    }

    componentWillMount() {

    }

    createAddress() {
        fetch('https://api.blockcypher.com/v1/btc/test3/addrs', {
            method: 'POST',
        }).then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return(
            <div>
                <p>address component</p>
            </div>
        )
    }

}

export default CreateAddress