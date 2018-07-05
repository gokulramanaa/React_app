import React, { Component } from 'react';
import './App.css';
import UserInput from './DomControl/UserInput';
import UserOutput from './DomControl/UserOutput';

class App extends Component {
  state = {
    username: [
      {person: 'Ram'},
      {person:'Divya'},
      {person: 'Manoj'}
    ]
  }

  mHandler = (event) => {
    this.setState(
      {
        username: [
          {person: event.target.value},
          {person:'Divya'},
          {person: 'Manoj'}
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.mHandler}/>
        <UserOutput name ={this.state.username[0].person}/>
        <UserOutput name = {this.state.username[1].person}/>
        <UserOutput name = {this.state.username[2].person}/>
      </div>
    );
  }
}

export default App;
