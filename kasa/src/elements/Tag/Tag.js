import React, { Component } from 'react'

class Tag extends Component {
    render() {
        return (
            <li className="tag">
                <p className="tag__content textWhite"> {this.props.tagContent} </p> 
            </li>
        );
    }
  }
export default Tag;