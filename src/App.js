import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 31 },
      { name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  deletePersonHandler = () => {

  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 68 },
        { name: event.target.value, age: 71 },
        { name: event.target.value, age: 86 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    } else {
      persons = null;
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          onClick={() => this.togglePersonsHandler()}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
