import React, { Component } from 'react'
import AccommodationCard from '../../elements/AccommodationCard/AccommodationCard';
import Banner from '../../elements/Banner/Banner';
import data from '../../assets/data.json'

class Home extends Component {
    render() {
        const list = [];
        data.forEach((element)=>{
            list.push(<AccommodationCard key={element.id} id={element.id} cover={element.cover} title={element.title}/>)
        });

        return (
            <div>
                <Banner page="home"/>
        
                <section className="appartmentGallery">
                    {list}
                </section>
            </div>
        );
    }
  }
export default Home;