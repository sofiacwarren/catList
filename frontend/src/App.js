import React from 'react';
import './App.css';
import Cow from './Components/Cow.js';
import CowsList from './Components/CowsList.js'

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
    this.handleClickCow = this.handleClickCow.bind(this);
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
      fetch("http://localhost:3000/api/cows", request)
        .then((res) => (res.json()))
        .then(this.getALLcows())
        .catch((err) => (
          console.error('error: ', err)
        ))
  }
  //handle Change
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  //handle Cow click -> select one cow
  handleClickCow(id) {
    console.log('click')
    this.setState({selectedCow: id})
  }

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

  //lifecycle methods
  componentDidMount() {
    this.getALLcows();
  }

  render() {

    return (
      <div className="App">
        <h1 className="App-header">
          Cow List
        </h1>
        <CowsList
          cowData={this.state.cowData}
          handleClickCow={this.handleClickCow}
        />
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
        <Cow
        // refactor to pass selectedCow from state.
          cow_id={cow.id}
          cow_name={cow.cow_name}
          cow_description={cow.cow_description}
        />
      </div>
    );
  }
}


export default App;

