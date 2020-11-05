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
  }

  //handle Submit
  handleSubmit(e) {
    fetch("/api/cows")
      .then((res) => (res.json()))
      .then((data) => (
        this.setState({cowData: data})
      ))
  }
  //handle Change
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  //handle Cow click -> getOne

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

