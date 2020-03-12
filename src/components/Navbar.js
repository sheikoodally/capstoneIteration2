//sheik
import React, { Component } from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Logo from '../images/testlogo.jpg';

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                  <div className="nav-header">
                    <Link to ="/">
                        <img className="navLogo" src={Logo} alt="Name"/>
                    </Link>
                    <button type="button" className="nav-btn">
                        <FaAlignRight className="nav-icon" onClick={this.handleToggle}/>
                    </button>
                  </div>
                  <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/proplist">Properties</Link>
                    </li>
                    <li>
                        <Link to="/proplist">Add Property</Link>
                    </li>
                    <li>
                        <Link to="/proplist">Info</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                  </ul>  
                </div>
            </nav>
        )
    }
}
