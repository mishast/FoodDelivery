import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class Cart extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="emptyCartContainer">
				<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
				<div className="emptyCartText">YOUR CART IS EMPTY</div>
				<Link to="/"><button className="emptyCartBackButton">Back to catalog</button></Link>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(Cart)
