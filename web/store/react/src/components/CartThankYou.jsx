import React from 'react';
import { Link } from "react-router-dom";

class CartThankYou extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="cartCenter">
					<div className="emptyCartContainer">
						<div className="emptyCart">
							<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
							<div className="emptyCartText">Thank you for your purchase!</div>
							<div className="emptyCartText">We will contact you soon.</div>
							<Link to="/"><button className="blueButton">Back to catalog</button></Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CartThankYou;
