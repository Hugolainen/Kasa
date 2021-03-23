import React, { Component } from 'react'

class AccommodationCard extends Component {
    // title
    // cover


    render() {
        return (
            <div className="accommodationCard">
                <img className="accommodationCard__image" src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="logo" />
                <p className="accommodationCard__title textWhite"> Cosy Appartement </p> 
            </div>
        );
    }
  }
export default AccommodationCard;