import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import CartPage from "./CartPage";
import CartThankYou from "./CartThankYou";
import ScrollToTop from "../helpers/ScrollToTop";

class App extends Component {
	render() {
		return (
			<ScrollToTop>
				<div className="root">
					<Header />
						<Switch>
							<Route path="/cart" component={CartPage} />
							<Route path="/thankYou" component={CartThankYou} />
							<Route path="/" component={Products} />
						</Switch>
					<Footer />
				</div>
			</ScrollToTop>
		);
	}
}

export default App;
