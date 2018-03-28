import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <div className="hidden-md-down" id="nav-container">
                <ul className="nav justify-content-center">
                <li className="nav-item" id="nav-li">                    
                    <Link to="/" className="nav link" id="nav-spec">Home</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/bitcoin" className="nav link" id="nav-spec">BitCoin</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/dash" className="nav link" id="nav-spec">DASH</Link>
                </li>
             

                <li className="nav-item" id="nav-li">                    
                    <Link to="/ethereum" className="nav link" id="nav-spec">Ethereum</Link>
                </li>

                <li className="nav-item" id="nav-li">                    
                    <Link to="/litecoin" className="nav link" id="nav-spec">LiteCoin</Link>
                </li>                                                  

                <li className="nav-item" id="nav-li">
                    <Link to="/create" className="nav link" id="nav-spec">Create BTC Address</Link>
                </li>

                </ul>
            </div>
            <div className="hidden-lg-up">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Menu
				</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="/" className="nav link">Home</Link>
                    <Link to="/bitcoin" className="nav link">BitCoin</Link>
                    <Link to="/dash" className="nav link">DASH</Link>                    
                    <Link to="/ethereum" className="nav link">Ethereum</Link>
                    <Link to="/litecoin" className="nav link">LiteCoin</Link>  
                    <Link to="/create" className="nav link">Create BTC Address</Link>                  
                </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;