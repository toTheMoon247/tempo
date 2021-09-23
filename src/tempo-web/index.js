import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Put React component <App> (app.jsx) inside App container that is in index.html
ReactDOM.render( <App />, document.getElementById("app") );
module.hot.accept();	
	

