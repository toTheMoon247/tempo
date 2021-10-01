import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hello from './components/hello';
import Welcome from './components/welcome';
import Dashboard from './components/dashboard';

const App = () => {
	
	return (
		<BrowserRouter>
			
			<Switch>
				
				<Route path="/" exact> 			
					<Dashboard />
				</Route>
				
				<Route path="/welcome">
					<Hello text="Hello World!" clickFunction={parentFunction}/>
				</Route>


				<Route path="/test">
					<h1>This is our TEST</h1>
				</Route>
					
			</Switch>

		</BrowserRouter>
		
	)
	
}

// parent function
const parentFunction = (name) => {
	alert (`Hello ${name}`);
} 

export default App;
