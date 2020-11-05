import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cow from './Components/Cow.js';
import CowsList from './Components/CowsList.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowData: [],
      inputId: '',
      selectedCow: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  //handle Submit
  handleSubmit(e) {

  }
  //handle Change
  handleChange(e) {
    this.setState({inputId: e.target.value})
  }

  //lifecycle method
  componentDidMount() {
    fetch("/api/cows")
      .then((res) => (res.json()))
      .then((data) => (
        this.setState({cowData: data})
      ))
      .catch((err) => (
        console.error('error: ', err)
      ))
  }

  render() {

    return (
      <div className="App">
        <h1 className="App-header">
          Cow List
        </h1>
        <CowsList cowData={this.state.cowData}/>
        <form onSubmit={this.handleSubmit}>
          <input
            name="inputId"
            placeholder="enter cow id"
            value={this.state.inputId}
            onChange={this.handleChange}
            ></input>
            <button type="submit">sub-mooooooo-t</button>
        </form>
      </div>
    );
  }
}


export default App;
