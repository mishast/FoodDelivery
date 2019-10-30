import React, { Component } from 'react';
import MobileDetector from "./helpers/MobileDetector";
import {BrowserRouter} from "react-router-dom";
import { Route, Switch } from "react-router";
import AdminApp from "./AdminApp";
import NotFoundSwitch from "./helpers/NotFoundSwitch";
import Login from "./pages/Login";
import RedirectToNotFound from "./helpers/RedirectToNotFound";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MobileDetector>
					<NotFoundSwitch>
							<Switch>
									<Route path="/admin" component={AdminApp} />
									<RedirectToNotFound />
							</Switch>
					</NotFoundSwitch>
				</MobileDetector>
			</BrowserRouter>
		);
	}
}

export default App;
