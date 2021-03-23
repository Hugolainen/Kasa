import React, { Component } from 'react'
import logo from '../../assets/images/logo.png';

class NavigationBar extends Component {

    render() {
      return (
        <header className="header">
            <div className="header__logo"> <img src={logo} alt="logo" /> </div>
            <ul className="header__nav">
                <li className="active">
                    Home
                </li>
                <li>
                    About
                </li>
            </ul>
        </header>
      );
    }
  }
export default NavigationBar;