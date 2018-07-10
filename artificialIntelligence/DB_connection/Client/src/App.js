import React, { Component } from 'react';
import './App.css';
import TableMain from './DocsControl/TableMain';
import Pagination from './DocsControl/Pagination';

class App extends Component {

constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 50,
      response:[],
      fields:[],
      colsize: 0,
      rowsize: 0,
      activepage:1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        response: res[0],fields:res[1], rowsize: res[0].length, colsize:Object.keys(res[0][0]).length
       }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render () {
    // Logic for displaying todos
    const { response, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);
    const colNames = [];
    for (let i = 0; i < this.state.colsize; i++) {
      colNames.push(this.state.fields[i].name);
    }

      return (
        <div>
          <h1>TABLE FROM MY SQL - LOCAL HOST</h1>
          <TableMain mdata = {currentTodos} columN = {colNames}/>
          <Pagination value = {this.state} clickhandle = {this.handleClick} />
      </div>
      );
    }
}

export default App;
