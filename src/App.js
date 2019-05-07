import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';

class App extends Component {
  state = {
    textLength: 0
  };

  inputChangeHandler = (event) => {
    const length = event.target.value.length;
    this.setState({ textLength: length});
  };

  validationOutput = () => {
    let validationOutput = null;

  }

  render() {
      return (
          <div className="App">
             <input onChange={this.inputChangeHandler.bind(this)} />
              <ValidationComponent textLength={this.state.textLength} />
          </div>
      );
  }
}

export default App;
