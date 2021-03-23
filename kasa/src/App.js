import React, {Component} from 'react';
import AccommodationCard from './elements/AccommodationCard/AccommodationCard';
import Banner from './elements/Banner/Banner';
import FooterBar from './layouts/Footer/FooterBar';
import NavigationBar from './layouts/Header/NavigationBar'

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavigationBar page={"home"}/>
  
        <Banner page={"home"} />

        <section className="appartmentGallery">
          <AccommodationCard />
          <AccommodationCard />
          <AccommodationCard />
          <AccommodationCard />
        </section>
        
        
  
        <FooterBar />
      </div>
    );
  }
}

export default App;
