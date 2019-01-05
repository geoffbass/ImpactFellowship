import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      puppies: []
    }
    this.addPuppy = this.addPuppy.bind(this);
  }

  async componentDidMount() {
    const responseFromServer = await axios.get('/puppies');
    const puppiesFromServer = responseFromServer.data;
    this.setState({
      puppies: puppiesFromServer
    });
  }

  addPuppy(newPuppies) {
    this.setState({
      puppies: newPuppies
    })
  }

  render() {
    return (
      <div>
        <h1>Hello Impact Fellowship</h1>
        <NewPuppyForm addPuppy={this.addPuppy} />
        <h3>Puppies:</h3>
        {
          this.state.puppies.map(puppy => <p>{puppy.name}, {puppy.age} year{puppy.age > 1 ? 's' : null} old</p>)
        }
      </div>
    );
  }
}

class NewPuppyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAgeChange (changeEvent) {
    this.setState({
      age: changeEvent.target.value
    })
  }

  handleNameChange (changeEvent) {
    this.setState({
      name: changeEvent.target.value
    })
  }

  async handleSubmit (submitEvent) {
    submitEvent.preventDefault();
    const response = await axios.post('/puppies', this.state);
    const puppies = response.data;
    this.props.addPuppy(puppies);
  }

  render() {
    return (
      <div>
        <h2>Add a new puppy!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input onChange={this.handleNameChange} type="text" name="name" />
          <br/>
          <label>Age:</label>
          <input onChange={this.handleAgeChange} type="text" name="age" />
          <br/>
          <button type="submit">Add Puppy</button>
        </form>
      </div>
    );
  }
}

export default App;
