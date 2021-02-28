import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Siddhant', age: '24' },
      { name: 'Iron man', age: '55' },
      { name: 'Steve', age: '55' },
      { name: 'Batman', age: '55' },
      { name: 'Hulk', age: 588 },
    ],
  });

  // const [otherState, setOtherState] = useState('Some other value');

  // console.log(personState, otherState);

  // const switchButtonHandler = () => {
  //   setPersonState({
  //     persons: [
  //       { name: 'Siddhant', age: '244' },
  //       { name: 'Iron man', age: '55' },
  //       { name: 'Steve', age: '55' },
  //       { name: 'Batman', age: '55' },
  //       { name: 'Hulk', age: 58 },
  //     ],
  //   });
  // };

  const [showPersonsState, setShowPersonsState] = useState(false);

  const setNameViaInput = (event) => {
    setPersonState({
      persons: [
        { name: event.target.value, age: '244' },
        { name: 'Iron man', age: '55' },
        { name: 'Steve', age: '55' },
        { name: 'Batman', age: '55' },
        { name: 'Hulk', age: 58 },
      ],
    });
  };

  const togglePersons = () => {
    setShowPersonsState(!showPersonsState);
  };

  const nameChangeHandler = (newName) => {
    setPersonState({
      persons: [
        { name: 'Siddhant', age: '244' },
        { name: 'Iron Man Mark 2', age: '55' },
        { name: newName, age: '55' },
        { name: 'Batman', age: '55' },
        { name: 'Hulk', age: 58 },
      ],
    });
  };

  return (
    <div className="App">
      <h2>Hi I am a React App</h2>
      <button onClick={() => togglePersons()}>Switch</button>
      {showPersonsState ? (
        <div>
          <Person
            name={personState.persons[0].name}
            age={personState.persons[0].age}
            inputChange={setNameViaInput}
          />
          <Person
            name={personState.persons[1].name}
            age={personState.persons[1].age}
            click={nameChangeHandler.bind(null, 'Captain America')}
          />
          <Person
            name={personState.persons[2].name}
            age={personState.persons[2].age}
          />
          <Person
            name={personState.persons[3].name}
            age={personState.persons[3].age}
          >
            {' '}
            I am a legendary warrior{' '}
          </Person>
          <Person
            name={personState.persons[4].name}
            age={personState.persons[4].age}
          />
        </div>
      ) : null}
    </div>
  );
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   'Hello',
  //   React.createElement('h1', null, 'I am a h1 tag')
  // );
};

export default app;
