import React, { Component } from 'react'

class Banner extends Component {
    render() {
        // Defines the content of the banner (image + text) based on the page
        var text="";
        var background="banner ";
        if(this.props.page === "home"){
            text = "Home anywhere and everywhere";
            background += "banner--home";
        }

        if(this.props.page === "about"){
            background += "banner--about";
        }

        return (
            <div>
                <h1 className={background}> {text} </h1>
            </div>
        );
    }
  }
export default Banner;