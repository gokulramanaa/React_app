import React, { Component } from 'react';
// import logo from './sst.png';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state ={
    persons:[
      {id:'lkkljdf',name:'Max', age:28},
      {id:'ieyrjkd',name:'Gokul', age:26},
      {id:'lkjdfnc',name:'Diva', age:23}
    ],
    otherstate: "othervalue",
    showPersons:  false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   // Don't do this this.state.person[0].name = "Value" shouldn't mutate state directly
  //   this.setState({persons:[
  //     {name:newName, age:28},
  //     {name:'Gokul', age:26},
  //     {name:'Diva', age:24}
  //   ]})
  // }

  nameChangeHandler =(event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColour: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            clickhandle = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            clickhandle = {this.switchNameHandler}
            changed={this.nameChangeHandler}/>
          <Person
            name ={this.state.persons[1].name}
            age ={this.state.persons[1].age}
            clickhandle = {this.switchNameHandler.bind(this,'Gopi')}>My Hobbies:Racing</Person>
          <Person
            name ={this.state.persons[2].name}
            age ={this.state.persons[2].age}
            clickhandle = {this.switchNameHandler}/> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, its working</h1>
        <p>Wow! I installed new language babel</p>
        <button
          style = {style}
          onClick={this.toggleHandler}>
                Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
