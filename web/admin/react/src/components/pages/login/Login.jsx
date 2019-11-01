import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {login, logout} from "../../../actions";
import { Icon, Input, Button, Alert } from 'antd';
import { withRouter, Redirect } from "react-router";
import agent from "../../../agent";

class Login extends Component {
	state = {
		logginError: ''
	};

	onLogin = (values) => {
		agent.login(values.username, values.password).then((response) => {
			console.log(response);
			if (response.result === "success") {
				this.props.login(response.token);
				this.props.history.push("/admin");
			} else if (response.result === "connection_error") {
				this.setState({ loginError: '' } );
				this.setState({ loginError: 'The problem with connection to server!' } );
			} else {
				this.setState({ loginError: '' } );
				this.setState({ loginError: 'The combination of username and password is incorrect!' } );
			}
		});
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
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				validationSchema={Yup.object().shape({
					username: Yup.string()
						.required('Required'),
					password: Yup.string()
						.required('Required')
				})}
				initialValues={{ username: '', password: '' }}
				onSubmit={this.onLogin}>
				{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
				}) => (
					<div className="loginPage">
						<div className="loginContainer">
							<div className="loginTitle">Sign In</div>
							<div className="loginError">
								{this.state.loginError && (
									<Alert
										message={this.state.loginError}
										type="error"
										showIcon
										closable
									/>
								)}
							</div>
							<div className="loginControlGroup">
								<Input
									name="username"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.username}
									prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
									placeholder="Username"
								/>
								<div className="loginValidationError">{errors.username}</div>
							</div>
							<div className="loginControlGroup">
								<Input.Password
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
									type="password"
									placeholder="Password"
								/>
								<div className="loginValidationError">{errors.password}</div>
							</div>
							<div className="loginActions">
								<Button type="primary" className="loginSignInButton" onClick={handleSubmit}>Sign In</Button>
							</div>
							<div className="loginActions">
								<div className="loginHint">Hint: demo / demo</div>
							</div>
						</div>
					</div>
				)}
			</Formik>
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
