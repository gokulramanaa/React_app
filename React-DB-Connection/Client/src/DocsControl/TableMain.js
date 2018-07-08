import React from 'react';
import TabelCreate from './TableCreate';
import './UserInput.css';

const tablemain =(props)=> {
  return(
    <table className="TableMain" border="1">
      <tbody>
        <tr>
          <th>Variable_name</th>
          <th>Variable_value</th>
          <th>Type</th>
          <th>Enabled</th>
        </tr>
        {props.mdata.map((member,id) =>
          <TabelCreate rowdata = {member} key = {id} rid = {id}/>
        )}
      </tbody>
    </table>
  );
};

export default tablemain;
