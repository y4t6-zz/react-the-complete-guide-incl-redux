import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 31 },
            { name: 'Stephanie', age: 26 }
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 68 },
                { name: 'Manuxxxx', age: 71 },
                { name: 'Stephaniexxxx', age: 86 }
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 68 },
                { name: event.target.value, age: 71 },
                { name: event.target.value, age: 86 }
            ]
        })
    }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
                changed={this.nameChangeHandler}
          />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}
              click={this.switchNameHandler.bind(this, 'Test')}>My Hobbies: Racing</Person>
          <Person
              name={this.state.persons[2].name}
              changed={this.nameChangeHandler}
              age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
