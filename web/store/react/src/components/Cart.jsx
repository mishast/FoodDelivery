import React from 'react';
import { connect } from 'react-redux'
import {Link} from "react-router-dom";
import CartTable from "./CartTable";
import CartForm from "./CartForm";

class Cart extends React.Component {

	state = {
		checkout: false
	};

	constructor(props) {
		super(props);
	}

	handleCheckout = () => {
		this.setState({
			...this.state,
			checkout: true
		});
	};

	handleCancel = () => {
		this.setState({
			...this.state,
			checkout: false
		});
	};

	render() {
		return (
			<React.Fragment>
				<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
				<div className="cartTitle">Your shopping cart</div>
				<div className="cartContainer">
					<CartTable disableDelete={this.state.checkout}/>
					{
						!this.state.checkout &&
						(
							<button className="blueButton checkoutButton" onClick={this.handleCheckout}>Checkout</button>
						)
					}
				</div>
				{
					this.state.checkout &&
					(<CartForm onCancel={this.handleCancel}/>)
				}
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
