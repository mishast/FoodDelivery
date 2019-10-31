import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login, logout} from "../../actions";
import { Icon, Input, Button } from 'antd';
import { withRouter, Redirect } from "react-router";

class Login extends Component {
	onLogin = () => {
		this.props.login('aaa');
		this.props.history.push("/admin");
	};

	onLogout = () => {
		this.props.logout();
	};

	render() {
		if (this.props.authorized) {
			return (
				<Redirect to="/admin" />
			);
		}

		return (
			<div className="loginPage">
				<div className="loginContainer">
					<div className="loginTitle">Sign In</div>
					<div className="loginControlGroup">
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Username"
						/>
						<div className="loginValidationError">Invalid username</div>
					</div>
					<div className="loginControlGroup">
						<Input.Password
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Password"
							/>
						<div className="loginValidationError">Invalid username</div>
					</div>
					<div className="loginActions">
						<Button type="primary" className="loginSignInButton">Sign In</Button>
					</div>
					<div className="loginActions" style={{'display': 'flex', 'flexDirection': 'row', 'background': 'rgba(0,0,0,0.1)'}}>
						<Button type="primary" className="loginSignInButton" style={{margin: '5px'}} onClick={this.onLogin}>Login</Button>
						<Button type="primary" className="loginSignInButton" style={{margin: '5px'}} onClick={this.onLogout}>Logout</Button>
					</div>
					<div className="loginActions">
						<div className="loginHint">Hint: demo / demo</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	login,
	logout
};

function mapStateToProps(state) {
	return {
		authorized: state.authorized,
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
