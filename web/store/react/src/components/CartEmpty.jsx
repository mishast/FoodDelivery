import React from 'react';
import { Link } from "react-router-dom";

class CartEmpty extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="emptyCartContainer">
				<div className="emptyCart">
					<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
					<div className="emptyCartText">YOUR CART IS EMPTY</div>
					<Link to="/"><button className="blueButton">Back to catalog</button></Link>
				</div>
			</div>
		);
	}
}

export default CartEmpty;
