import React from 'react';
import './UserInput.css'


const UserOutput =(props)=> {
  return (
    <div className="UserOutput">
    <p> Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets </p>
    <p>Hello Good evening Mr. {props.name}</p>
    </div>
  );
};

export default UserOutput;
