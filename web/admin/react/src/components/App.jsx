import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import { Route, Redirect, Switch } from "react-router";
import MobileDetector from "./helpers/MobileDetector";
import AdminApp from "./AdminApp";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound";

class App extends Component {
	render() {
		console.log(this.props);
		return (
			<BrowserRouter>
				<MobileDetector>
					{
						this.props.authorized ?
							(
								<Switch>
									<Route path="/404" component={NotFound} />
									<Route path="/admin/login" component={Login} />
									<Route path="/admin" component={AdminApp} />
									<Route path="/">
										<Redirect to="/admin" />
									</Route>
									<Route>
										<Redirect to="/404" />
									</Route>
								</Switch>
							)
							:
							(
								<Switch>
									<Route path="/404" component={NotFound} />
									<Route path="/admin/login" component={Login} />
									<Route path="/admin">
										<Redirect to="/admin/login" />
									</Route>
									<Route path="/">
										<Redirect to="/admin" />
									</Route>
									<Route>
										<Redirect to="/404" />
									</Route>
								</Switch>
							)
					}
				</MobileDetector>
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state) {
	return {
		authorized: state.authorized,
	};
}

export default connect(mapStateToProps, null)(App);
