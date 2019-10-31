import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login, logout} from "../../actions";
import {Link} from "react-router-dom";

class Login extends Component {
	onLogin = () => {
		this.props.login('aaa');
	};

	onLogout = () => {
		this.props.logout();
	};

	render() {
		return (
			<div className="p404container">
				<h1 className="p404title">404</h1>
				<div className="p404text">That page doesn't exist.</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	login,
	logout
};

export default connect(null, mapDispatchToProps)(Login);
