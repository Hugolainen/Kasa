import React, {Component} from 'react';
import FooterBar from './layouts/Footer/FooterBar';
import NavigationBar from './layouts/Header/NavigationBar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Accommodation from './pages/Accomodation/Accomodation';

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavigationBar page={"home"}/>
  
        <Home />
        <About />
        <NotFound />
        <Accommodation />

        <FooterBar />
      </div>
    );
  }
}

export default App;
