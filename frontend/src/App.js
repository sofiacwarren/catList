import React from 'react';
import './App.css';
import Cow from './Components/Cow.js';
import CowsList from './Components/CowsList.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowData: [],
      inputCowName: '',
      inputDescription: '',
      selectedCow: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getALLcows = this.getALLcows.bind(this);
  }

  //handle Submit
  handleSubmit(e) {
    e.preventDefault();
    var request = {method: 'POST',
      headers: {'Content-Type': 'application/json'}
  }
    var newCowData = {
      cow_name: this.state.inputCowName,
      cow_description: this.state.inputDescription
      };
      request.body = JSON.stringify(newCowData);
      console.log('option.body: ', request.body)
      fetch("http://localhost:3000/api/cows", request)
        .then((res) => (res.json()))
        .then(this.getALLcows())
  }
  //handle Change
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  //handle Cow click -> select one cow

  //getALLcows
  getALLcows() {
    fetch("/api/cows")
      .then((res) => (res.json()))
      .then((data) => (
        this.setState({cowData: data})
      ))
      .catch((err) => (
        console.error('error: ', err)
      ))
  }

  //lifecycle method
  componentDidMount() {
    this.getALLcows();
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
            name="inputCowName"
            placeholder="enter cow name"
            value={this.state.inputCowName}
            onChange={this.handleChange}
            ></input>
          <input
            name="inputDescription"
            placeholder="enter cow description"
            value={this.state.inputDescription}
            onChange={this.handleChange}
            ></input>
            <button type="submit">sub-mooooooo-t</button>
        </form>
        <Cow selectedCow={this.state.selectedCow}/>
      </div>
    );
  }
}


export default App;

