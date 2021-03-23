import React, {Component} from 'react';
import FooterBar from './layouts/Footer/FooterBar';
import NavigationBar from './layouts/Header/NavigationBar'

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavigationBar />
  
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        
  
        <FooterBar />
      </div>
    );
  }
}

export default App;
