import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		return this.state.hasError ?
			<h1>Ooops Something is Wrong...</h1> :
			(
				<div>
					{this.props.children}
				</div>
			)
	}
}

export default ErrorBoundry;