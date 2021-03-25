import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import FooterBar from './layouts/Footer/FooterBar';
import NavigationBar from './layouts/Header/NavigationBar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Accommodation from './pages/Accomodation/Accomodation';

/*
<Accommodation />
*/

class App extends Component{
  render(){

    

    return (
      <Router>
        <div className="App">
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact component={NotFound} />
          </Switch>

          <FooterBar />
        </div>
      </Router>
    );
  }
}

export default App;
