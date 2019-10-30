import React, {Component} from "react";
import {Redirect} from "react-router";

class RedirectToNotFound extends Component {

	render() {
		console.log('Redirect to not found');

		return (
			<Redirect to={{ state: { notFoundError: true } }} />
		);
	}

}

export default RedirectToNotFound;
