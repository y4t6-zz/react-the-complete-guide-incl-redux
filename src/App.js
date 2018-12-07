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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  nameChangedHanlder = ( event, index ) => {
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons
    })
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
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={index}
                changed={(event) => this.nameChangedHanlder(event, index)}
              />
            )
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
