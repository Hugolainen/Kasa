import React, { Component } from 'react'

class Carousel extends Component {
    constructor() {
        super();
        
        this.state = {
          carouselIndex: 0,
        }

        // Binding methods
        this.nextPicture = this.nextPicture.bind(this);
        this.previousPicture = this.previousPicture.bind(this);
        this.updatePicture = this.updatePicture.bind(this);
    }

    updatePicture(){
        return this.props.pictureList[this.state.carouselIndex];
    }

    nextPicture(event) {
        event.preventDefault();

        var newIndex;
        if(this.state.carouselIndex >= this.props.pictureList.length-1){
            newIndex = 0;
        }
        else{
            newIndex = this.state.carouselIndex +1;
        }
        
        this.setState({
            carouselIndex: newIndex,
        });       
    }

    previousPicture(event) {
        event.preventDefault();
        var newIndex;
        if(this.state.carouselIndex <= 0){
            newIndex = this.props.pictureList.length-1;
        }
        else{
            newIndex = this.state.carouselIndex -1;
        }
        
        this.setState({
            carouselIndex: newIndex,
        });
    }

    

    render() {

        var singlePictureClass = "";
        if(this.props.pictureList.length === 1){
            singlePictureClass = "carousel--singlePicture";
        }

        return (
            <section className="carousel">
                <img className="carousel__image" src={this.updatePicture()} alt={"picture " + this.carouselIndex} />
                <div type="button" onClick={this.nextPicture} className="carousel__next"> <i className={"fas fa-chevron-right " + singlePictureClass}></i> </div>
                <div type="button" onClick={this.previousPicture} className="carousel__previous"> <i className={"fas fa-chevron-left" + singlePictureClass}></i> </div>
            </section>
        );
    }
  }
export default Carousel;