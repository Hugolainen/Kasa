import React, {Component} from 'react';
import NavigationBar from './layouts/Header/NavigationBar'

class App extends Component{
  render(){
    return (
      <div className="App">
        <NavigationBar />
  
        <body>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </body>
  
        <footer>
  
        </footer>
      </div>
    );
  }
}

export default App;
