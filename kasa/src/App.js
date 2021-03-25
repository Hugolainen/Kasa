// Libraries import
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// Components import
import FooterBar from './layouts/Footer/FooterBar';
import NavigationBar from './layouts/Header/NavigationBar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Accommodation from './pages/Accomodation/Accomodation';

// Main
class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/accomodation/:id" component={Accommodation} />
            <Route exact component={NotFound} />
          </Switch>

          <FooterBar />
        </div>
      </Router>
    );
  }
}

export default App;
