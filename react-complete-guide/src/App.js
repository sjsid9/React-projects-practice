import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Siddhant', age: '24' },
      { name: 'Iron man', age: '55' },
      { name: 'Steve', age: '55' },
      { name: 'Batman', age: '55' },
      { name: 'Hulk', age: 588 },
    ],
  };

  switchButtonHandler = () => {
    this.setState({
      persons: [
        { name: 'Siddhant', age: '244' },
        { name: 'Iron man', age: '55' },
        { name: 'Steve', age: '55' },
        { name: 'Batman', age: '55' },
        { name: 'Hulk', age: 58 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Hi I am a React App</h2>
        <button onClick={this.switchButtonHandler}>Switch</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        >
          {' '}
          I am a legendary warrior{' '}
        </Person>
        <Person
          name={this.state.persons[4].name}
          age={this.state.persons[4].age}
        />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   'Hello',
    //   React.createElement('h1', null, 'I am a h1 tag')
    // );
  }
}

export default App;
