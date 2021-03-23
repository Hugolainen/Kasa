import React, { Component } from 'react'
import logo from '../../assets/images/logo.png';

class NavigationBar extends Component {

    render() {
      var homePageActive=false;
      var aboutPageActive=false;
      if(this.props.page === "home"){
        homePageActive = true;
      }

      if(this.props.page === "about"){
        aboutPageActive = true;
      }

      return (
        <header className="header">
            <div className="header__logo"> <img src={logo} alt="logo" /> </div>
            <ul className="header__nav">
                <li className={homePageActive?"active":""}>
                    Home
                </li>
                <li className={aboutPageActive?"active":""}>
                    About
                </li>
            </ul>
        </header>
      );
    }
  }
export default NavigationBar;