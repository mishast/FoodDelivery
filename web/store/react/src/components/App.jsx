import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import CartPage from "./CartPage";

class App extends Component {
	render() {
		return (
			<div className="root">
				<Header />
					<Switch>
						<Route path="/cart" component={CartPage} />
						<Route path="/" component={Products} />
					</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
