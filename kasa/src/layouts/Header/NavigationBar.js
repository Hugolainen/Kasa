import React, { Component } from 'react'
import logo from '../../assets/images/logo.png';

class NavigationBar extends Component {

    render() {
      return (
        <header class="header">
            <div class="header__logo"> <img src={logo} className="App-logo" alt="logo" /> </div>
            <ul class="header__nav">
                <li>
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