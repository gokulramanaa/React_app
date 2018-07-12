import React, { Component } from 'react';
import './App.css';
import TableMain from './DocsControl/TableMain';
import Pagination from './DocsControl/Pagination';
import SubmitButton from './DocsControl/SubmitHandle';
// import Button from 'material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
      index: [],
      init: false,
      isfirstpage: true,
      issecondpage: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickappend = this.clickappend.bind(this);
    this.selectedall = this.selectedall.bind(this);
    this.enablepage = this.enablepage.bind(this);
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

  enablepage(event){
    console.log("sending", JSON.stringify(this.state.index));
    this.postApi().then(res => this.setState({
        response: res,
        fields:Object.keys(res[0]),
        rowsize: res.length, 
        colsize:Object.keys(res[0]).length,
        index: Object.keys(res).map(x => false),
        isfirstpage:false,
        issecondpage:true
       }))
    .catch(err => console.log(err));
  }

  componentWillMount() {
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
    const response = await fetch('/test');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return (body);
  };

  postApi = async () => {
    const response = await fetch('/api/add_message/1234', 
          {method: "post", 
          headers: {'Accept':'application/json','Content-Type': 'application/json'},
          body:JSON.stringify(this.state.index)});

    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body)
    return (body)
    };

    secondreturn(){
    const { response, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);
    return(
      <div>
            <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                REJECTED TABLE AFTER SECOND ITERATION
              </Typography>
            </Toolbar>
          </AppBar>
          

          <TableMain
            mdata = {currentTodos}
            columN = {this.state.fields}
            click = {this.clickappend}
            index = {this.state.index}/>

          <Pagination
            value = {this.state}
            clickhandle = {this.handleClick} />
        </div>
      );  
    }

  render () {
    // Logic for displaying todos
    const { response, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = response.slice(indexOfFirstTodo, indexOfLastTodo);
    let val = {}
    val = this.state.index.map((x,id) => {return (x)})

    let firstreturn = (
        <div>
          
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                REJECTED TABLE INFO
              </Typography>
            </Toolbar>
          </AppBar>
          
          <button variant="contained" color="primary" className = "Markall" 
          onClick = {(event) => this.selectedall(event)}>Markall/Unmark</button>
          <TableMain
            mdata = {currentTodos}
            columN = {this.state.fields}
            click = {this.clickappend}
            index = {this.state.index}/>
          
          <Pagination
            value = {this.state}
            clickhandle = {this.handleClick} />

          <button onClick= {(event)=>this.enablepage(event)}>Submit</button>

        </div>
      );
 
      return (
        <div>
        { this.state.isfirstpage ? firstreturn : null }
        { this.state.issecondpage ? this.secondreturn() : null }
      </div>
      );
      }
  }

export default App;
