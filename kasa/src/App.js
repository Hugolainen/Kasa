import React, {Component} from 'react';
import Banner from './elements/Banner/Banner';
import FooterBar from './layouts/Footer/FooterBar';
import NavigationBar from './layouts/Header/NavigationBar'

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavigationBar />
  
        <Banner page={"home"} />

      
        
  
        <FooterBar />
      </div>
    );
  }
}

export default App;
