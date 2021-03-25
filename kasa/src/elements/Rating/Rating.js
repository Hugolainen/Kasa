import React, { Component } from 'react'

class Rating extends Component {

    render() {
        // Generate a list of 5 stars based on the rating of the accomodation
        // Their difference is class based
        const ratingString = []; 
        for(let i=0; i<this.props.rating; i++){
            ratingString.push(<i key={"Star_" + i} className="fas fa-star rating__starFull"></i>) ;
        }
        for(let i=this.props.rating; i<5; i++){
            ratingString.push(<i key={"Star_" + i} className="fas fa-star rating__starEmpty"></i>);
        }

        return (
            <div className="rating">
                <span> {ratingString} </span>
            </div>
        );
    }
  }
export default Rating;