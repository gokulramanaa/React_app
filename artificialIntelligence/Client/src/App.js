import React, { Component } from 'react';
import './App.css';
import TableMain from './DocsControl/TableMain';
import Pagination from './DocsControl/Pagination';

class App extends Component {

constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 10,
      response:[],
      fields:[],
      colsize: 0,
      rowsize: 0,
      activepage:1,
      tickval:0
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickmaker = this.clickmaker.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  clickmaker(event, keyid ){
    console.log(keyid);
    this.setState({
      tickval: '&#10004'
    });
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        response: res,fields:Object.keys(res[0]), rowsize: res.length, colsize:Object.keys(res[0]).length
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
    console.log(response.slice(indexOfFirstTodo,indexOfLastTodo));

      return (
        <div>
          <h1>TABLE FROM MY SQL - LOCAL HOST</h1>
          {/* {console.log(currentTodos)} */}
          <TableMain
            mdata = {currentTodos}
            columN = {this.state.fields}
            clicki = {(event, keyid) => this.clickmaker(event,keyid)}
            tickval = {this.state.tickval}/>
          <Pagination
            value = {this.state}
            clickhandle = {this.handleClick} />
          {/* <p>I will display &#10004;</p> */}
      </div>
      );
    }
}

export default App;
