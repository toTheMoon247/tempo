import React, { Component } from 'react';

class Counter extends Component {

	state = {
		counter: 0
	}

	handleIncrement = () => {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		return (
			<React.Fragment>
				<h1>{this.state.counter}</h1>
				<button className="btn-primary" onClick={this.handleIncrement}>
				 	Increase Counter
				 </button>
			</React.Fragment>
		);
	}
}

export default Counter;