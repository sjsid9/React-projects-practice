import React from 'react';

const person = (props) => {
  return (
    <div onClick={props.click}>
      <h5>
        Hi I'm {props.name}. My age is {props.age}
      </h5>
      {props.children}
      <input type="text" onChange={props.inputChange} value={props.name}></input>
    </div>
  );
};

export default person;
