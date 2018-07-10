import React, { Component } from 'react';
import './App.css';
import TableMain from './DocsControl/TableMain';
import Pagination from './DocsControl/Pagination';
import SubmitButton from './DocsControl/SubmitHandle';

class App extends Component {

constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 10,
      response:[],
      fields:[],
      colsize: 0,
      rowsize: 10,
      activepage:1,
      index: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickappend = this.clickappend.bind(this);
    this.selectedall = this.selectedall.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  clickappend (event, indi){
      let array = [...this.state.index];
      array[indi] = !array[indi];
      this.setState({index: array});
  }

  selectedall (event){
      let array = [...this.state.index];
      if(array[0]){array = array.map(x => false);}
      else{array = array.map(x => true);}
      this.setState({index: array})
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        response: res,
        fields:Object.keys(res[0]),
        rowsize: res.length, 
        colsize:Object.keys(res[0]).length,
        index: Object.keys(res).map(x => false)
       }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return (body);
  };

  render () {
    // Logic for displaying todos
    const { response, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);
 
      return (
        <div>
          <h1 align='center'>REJECTED TABLE INFO</h1>
          
          <button className = "Markall" onClick = {(event) => this.selectedall(event)}>Markall/Unmark</button>
          <TableMain
            mdata = {currentTodos}
            columN = {this.state.fields}
            click = {this.clickappend}
            index = {this.state.index}/>
		      
          <Pagination
            value = {this.state}
            clickhandle = {this.handleClick} />

          <SubmitButton
            value = {this.state.index}/>

        </div>
        );
      }
  }

export default App;
