import React, { Component } from 'react';
import './App.css';
// import TableCreate from './DocsControl/TableCreate';
import TableMain from './DocsControl/TableMain';

class App extends Component {

constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 100,
      response:[],
      columns:[],
      flag: false,
      colsize: 2,
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
        response: res,columns:"val", flag:true, rowsize: res.length, colsize:Object.keys(res[0]).length
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
    const { response, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);

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
          onClick={this.handleClick}>{number}</li>
      );
    });

      return (
        <div>
          <h1>METRICS TABLE FROM MY SQL - LOCAL HOST</h1>
          <TableMain mdata = {currentTodos} />
          <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
      );
    }
}

export default App;
