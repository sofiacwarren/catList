import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cow from './Components/Cow.js';
import CowsList from './Components/CowsList.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowData: {},
      inputId: ''
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          Cow List
        </header>

        <CowsList />

      </div>
    );
  }
}


export default App;
