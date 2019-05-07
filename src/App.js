import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    input: []
  };

  inputChangeHandler = (event) => {
    const input = event.target.value;
    this.setState({ input: [...input]});
  };

  deleteCharItem = (event, index) => {
      const newState = {...this.state};

      newState.input.splice(index, 1);
      this.setState(newState);
  }

  charOutput = () => {
      let charOutput = null;
      const text = this.state.input;

      if (text.length > 0) {
          charOutput = text.map((char, index) => {
              return (
                  <CharComponent
                      key={index}
                      letter={char}
                      click={(event) => {this.deleteCharItem(event, index)}}
                  />
              );
          });
      }

      return charOutput;
  };

  render() {
      const charOutput = this.charOutput();
      const input = this.state.input.join('');

      return (
          <div className="App">
             <input onChange={this.inputChangeHandler.bind(this)} value={input}/>
              <ValidationComponent input={input} />
              {charOutput}
          </div>
      );
  }
}

export default App;
