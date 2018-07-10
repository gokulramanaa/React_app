import React from 'react';

const tablecreate =(props)=> {

const rowd = props.coln.map((number,indi) => {
  return (<td
      key={indi}
      id={indi}>{eval("props.rowdata."+(number))}</td>
  );
});

  return(
    <tr key={props.rid}>
      {rowd}
    </tr>);
};

export default tablecreate;
