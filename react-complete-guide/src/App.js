import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 'ssdc', name: 'Siddhant', age: '24' },
      { id: 'dwsad', name: 'Iron man', age: '55' },
      { id: 'sds', name: 'Steve', age: '55' },
      { id: 'swad', name: 'Batman', age: '55' },
      { id: 'swadws', name: 'Hulk', age: 588 },
    ],
  });

  const [showPersonsState, setShowPersonsState] = useState(false);

  const setNameViaInput = (event, personId) => {
    const newName = event.target.value;

    const personIndex = personState.persons.findIndex((p) => p.id === personId);
    const newPersonObj = { ...personState.persons[personIndex] };

    newPersonObj.name = newName;

    const persons = [...personState.persons];
    persons[personIndex] = newPersonObj;

    setPersonState({persons});
  };

  const togglePersons = () => {
    setShowPersonsState(!showPersonsState);
  };

  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        {personState.persons.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              key={person.id}
              onInputChange={(event) => setNameViaInput(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Hi I am a React App!!</h2>
      <button onClick={() => togglePersons()}>Toggle View</button>
      {persons}
    </div>
  );
};

export default app;
