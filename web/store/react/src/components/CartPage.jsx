import React from 'react';
import { connect } from 'react-redux'
import CartEmpty from "./CartEmpty";
import Cart from "./Cart";

class CartPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let cartEmpty = this.props.cart.length === 0;

		return (
			<div className="container">
				<div className="cartCenter">
					{ cartEmpty ? (<CartEmpty />) : (<Cart />) }
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(CartPage)
