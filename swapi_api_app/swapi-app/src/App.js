import React, { Component } from 'react';
import Input from './Input'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      climate: '',
      gravity: '',
      terrain: '',
      population: '',
      residents: [],
    }
  }

  render() {
    return (
      <div className="App">
        <Input />

      </div>
    );
  }
}

export default App;
