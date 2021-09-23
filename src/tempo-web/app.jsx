import React from 'react';
import Hello from './components/hello';
import Welcome from './components/welcome';

const App = () => {
	
	return (
		<React.Fragment> 
			<Hello
				text="Hello World!"
				clickFunction={parentFunction}
			/>
			<Welcome
				text="Welcome to Tempo App"
			/>
		</React.Fragment>
		
	)
	
}

// parent function
const parentFunction = (name) => {
	alert (`Hello ${name}`);
} 

export default App;
