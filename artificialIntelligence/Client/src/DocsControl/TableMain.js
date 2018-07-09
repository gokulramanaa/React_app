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

  tableheader.push(
    <td
        key={props.columN.length}
        id={props.columN.length}>Correct Rows</td>
  );

  return(
    <table className="TableMain" border="1">
      <tbody>
        <tr>
          {tableheader}
        </tr>
        {/* {console.log("mdata",props.mdata)} */}
        {props.mdata.map((member,id) =>
          <TabelCreate
            rowdata = {member}
            key = {id} rid = {id}
            coln = {props.columN}
            clicki = {(event, keyid) => props.clicki(event, keyid)}
            tickval = {props.tickval}
          />
        )}
      </tbody>
    </table>
  );
};

export default tablemain;
