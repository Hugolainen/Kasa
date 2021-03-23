import React, { Component } from 'react'
import logo from '../../assets/images/logoWhite.png';

class FooterBar extends Component {

    render() {
      return (
        <footer className="footer">
            <div className="footer__logo"> <img src={logo} alt="logo" /> </div>
            <p className = "textBigger textWhite"> © 2020 Kasa. All rights reserved </p>
        </footer>
      );
    }
  }
export default FooterBar;