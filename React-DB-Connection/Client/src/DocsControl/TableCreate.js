import React from 'react';

const tablecreate =(props)=> {
  return(
    <tr key={props.rid}>
      <td>{props.rowdata.Variable_name}</td>
      <td>{props.rowdata.Variable_value}</td>
      <td>{props.rowdata.Type}</td>
      <td>{props.rowdata.Enabled}</td>
    </tr>);
};

export default tablecreate;
