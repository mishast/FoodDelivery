import React, { Component } from 'react';
import {withRouter} from "react-router";

class ScrollToTop extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps) {
		console.log('!!componentDidUpdate');
		console.log(this.props);
		console.log(prevProps);
		if (this.props.location !== prevProps.location) {
			console.log('change location');
			if (typeof window != 'undefined') {
				console.log('scroll top');
				window.scrollTo(0, 0)
			}
		}
	}

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollToTop)
