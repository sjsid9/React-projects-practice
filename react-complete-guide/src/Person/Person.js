import React from 'react';

const person = (props) => {
  return (
    <div>
      <h5>
        Hi I'm {props.name}. My age is {props.age}
      </h5>
      {props.children}
      <input
        type="text"
        onChange={(event) => props.onInputChange(event)}
        value={props.name}
      ></input>
    </div>
  );
};

export default person;
