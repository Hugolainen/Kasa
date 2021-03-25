import React, { Component } from 'react'

class Host extends Component {
    render() {
        return (
            <div className="host">
                <p className="host__name"> {this.props.name} </p>
                <img className="host__image" src={this.props.picture} alt={this.props.name} />
            </div>
        );
    }
  }
export default Host;