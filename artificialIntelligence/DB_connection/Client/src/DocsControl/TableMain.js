import React from 'react';
import TabelCreate from './TableCreate';
import './UserInput.css';

const tablemain =(props)=> {

  const tableheader = props.columN.map((number,indi) => {
    return (<th
        key={indi}
        id={indi}>{number}</th>
    );
  });

  return(
    <table className="TableMain" border="1">
      <tbody>
        <tr>
          {tableheader}
        </tr>
        {/* {console.log(props.mdata)} */}
        {props.mdata.map((member,id) =>
          <TabelCreate rowdata = {member} key = {id} rid = {id} coln = {props.columN}/>
        )}
      </tbody>
    </table>
  );
};

export default tablemain;
