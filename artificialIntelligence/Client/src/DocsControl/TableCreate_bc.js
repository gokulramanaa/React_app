import React, { Component } from 'react';

class TableCreate extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     clicked: false
  //   };
  // };

  constructor(props) {
      super(props);
      this.state = {
        clicked: false,
        todosPerPage: 10
      };
    }

  const rowd = this.props.coln.map((number,indi) => {
    return (<td
        key={indi}
        id={indi}>{eval("props.rowdata."+(number))}</td>
    );
    });

  const clickmarker = (event) => {
    this.state.clicked
    event.currentTarget.style.backgroundColor = '#ccc';
    }


  render(){
      let tickval = ""
      if (clicked){
        tickval: '&#10004'
      }

      rowd.push(
        <td
            key={props.coln.length}
            id={props.coln.length}
            onClick={this.clickmarker}>{tickval}</td>
    );

    return(
      <tr key={props.rid}>
        {rowd}
      </tr>
    );
    }
}

export default TableCreate;
