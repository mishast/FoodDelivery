import React, { Component } from 'react';
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (
			<div className="root">
				<Header />
				<Products />
				<Footer />
			</div>
		);
	}
}

export default App;
