import React, { Component } from 'react'


class AccommodationCard extends Component {

    render() {
        return (
            <div className="accommodationCard">
                <img className="accommodationCard__image" src={this.props.cover} alt="cover" />
                <p className="accommodationCard__title textWhite"> {this.props.title} </p> 
            </div>
        );
    }
  }
export default AccommodationCard;