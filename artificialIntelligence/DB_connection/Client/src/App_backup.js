import React, { Component } from 'react';
import './App.css';
// import TableCreate from './DocsControl/TableCreate';
import TableMain from './DocsControl/TableMain';
import ReactTable from "react-table";
import Pagination from 'react-js-pagination';
// import UserInput from './DomControl/UserInput';
// import UserOutput from './DomControl/UserOutput';

class App extends Component {

constructor() {
    super();
    this.state = {
      // todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      todosPerPage: 100,
      // response:[],
      columns:[],
      flag: false,
      // colsize: 2,
      // rowsize: 0,
      activepage:1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }




  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log("body",body);
    return body;
  };


  render () {
    // const response = []
    const response =  this.callApi;
    const rowsize = response.length;
    const colsize = 4;
    // Object.keys(response[0]).length

    const { currentPage, todosPerPage } = this.state;
    console.log(response);
    console.log("check how many times");

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.rowsize / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });


    {console.log("new state",this.state.activepage)}
    {console.log("row size", this.state.rowsize)}
    {console.log("renderPageNumbers", renderPageNumbers)}
    {console.log("render todos", renderTodos)}
    {console.log("respose", this.state.response)}
      return (

        <div>
          <h1>Users</h1>
          <TableMain mdata = {renderTodos} />
          <ul id="page-numbers">
          {console.log("inside return",renderPageNumbers)}
          {renderPageNumbers}
        </ul>
      </div>
      );
    }
}

export default App;
