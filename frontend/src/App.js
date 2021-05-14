import React from 'react';
import './App.css';
import Cat from './Components/Cat.js';
import CatList from './Components/CatList.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      catData: [],
      inputCatName: '',
      inputDescription: '',
      selectedCat: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getALLcats = this.getALLcats.bind(this);
  }

  //handle Submit
  handleSubmit(e) {
    e.preventDefault();
    var request = {method: 'POST',
      headers: {'Content-Type': 'application/json'}
  }
    var newCatData = {
      cat_name: this.state.inputCatName,
      cat_description: this.state.inputDescription
      };
      request.body = JSON.stringify(newCatData);
      fetch("http://localhost:3000/api/cats", request)
        .then((res) => (res.json()))
        .then(this.getALLcats())
        .catch((err) => (
          console.error('error: ', err)
        ))
  }
  //handle Change
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  //handle Cat click -> select one cat
  handleClickCat(id) {
    console.log('click')
    this.setState({selectedCat: this.state.catData[id]})
  }

  //getALLcats
  getALLcats() {
    fetch("/api/cats")
      .then((res) => (res.json()))
      .then((data) => (
        this.setState({catData: data})
      ))
      .catch((err) => (
        console.error('error: ', err)
      ))
  }

  //lifecycle methods
  componentDidMount() {
    this.getALLcats();
  }

  render() {

    return (
      <div className="App">
        <h1 className="App-header">
          Cat List
        </h1>
        <CatList
          catData={this.state.catData}
          handleClickCat={this.handleClickCat}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            name="inputCatName"
            placeholder="enter cat name"
            value={this.state.inputCatName}
            onChange={this.handleChange}
            ></input>
          <input
            name="inputDescription"
            placeholder="enter cat description"
            value={this.state.inputDescription}
            onChange={this.handleChange}
            ></input>
            <button type="submit">sub-meooooooow-t</button>
        </form>
        <Cat/>
      </div>
    );
  }
}


export default App;

