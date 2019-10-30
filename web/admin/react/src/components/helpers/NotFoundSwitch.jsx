import {withRouter} from "react-router";
import React, {Component} from "react";
import { Route } from "react-router";

class NotFoundSwitch extends Component {

	render() {
		/*
		console.log('Render NotFoundSwitch');
		console.log(this.props.location);

		let location = this.props.location;
		let notFound = location && location.state && location.state.notFoundError;

		return (
			notFound ?
				( <div>NotFound ERROR 404</div> )
			:
				( this.props.children )
		);

	 */
		return (
			<Route render={
				(props) => {
					let location = props.location;
					let notFound = location && location.state && location.state.notFoundError;

					return (
						notFound ?
							( <div>NotFound ERROR 404</div> )
							:
							( this.props.children )
					);
				}
			} />
		);
	}

}

export default NotFoundSwitch;
