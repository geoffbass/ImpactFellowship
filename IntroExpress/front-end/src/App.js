import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      puppies: []
    }
  }

  async componentDidMount() {
    const responseFromServer = await axios.get('/puppies');
    const puppiesFromServer = responseFromServer.data;
    this.setState({
      puppies: puppiesFromServer
    });
  }

  render() {
    console.log('puppies', this.state.puppies);
    return (
      <div>
        <h1>Hello Impact Fellowship</h1>
        <h3>Puppies will go here:</h3>
        {
          this.state.puppies.map(puppy => <p>{puppy.name}</p>)
        }
      </div>
    );
  }
}

export default App;
