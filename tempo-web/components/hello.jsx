import React from 'react';

// stateless functional component
const Hello = (props) => {
	
	const childFunction = () => {
		props.clickFunction("Andrew");
	}

	return(
		<h1 onClick={childFunction}>{props.text}</h1>
	)
	
} 

export default Hello;

