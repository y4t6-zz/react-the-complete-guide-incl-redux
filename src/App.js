import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <Person name="Max" age="28"/>
          <Person name="Manu" age="29"><h2>Person dd</h2></Person>
          <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}

export default App;
