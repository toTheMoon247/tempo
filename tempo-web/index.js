import "core-js/stable";
import "regenerator-runtime/runtime";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// This is the entry poing for the project
// Put React component <App> (app.jsx) inside App container that is in index.html
ReactDOM.render( <App />, document.getElementById("app") );
module.hot.accept();	
	

