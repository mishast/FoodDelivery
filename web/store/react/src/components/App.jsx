import React, { Component } from 'react';
import Header from "./Header";
import Products from "./Products";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Products />
			</div>
		);
	}
}

export default App;
