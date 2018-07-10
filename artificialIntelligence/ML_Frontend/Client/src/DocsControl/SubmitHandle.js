import React from 'react';

const submithandle = (props) => {

	const submitmsg =()=>{
		console.log(props.value)
	};

	return(
			<div>
				<button onClick= {()=> submitmsg()}>Submit</button>
			</div>
		);
};

export default submithandle;