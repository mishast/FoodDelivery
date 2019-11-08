import React from 'react';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import CartTable from "./CartTable";

class Cart extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
				<div className="cartTitle">Your shopping cart</div>
				<div className="cartContainer">
					<CartTable />
					<Link to="/"><button className="checkoutButton">Checkout</button></Link>
				</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(Cart)
