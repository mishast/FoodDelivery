import React from 'react';
import {connect} from "react-redux";

class CartIcon extends React.Component {

	render() {
		let cartLink = "";
		let itemsCount = this.props.cart.reduce((acc, item) => acc + item.qty, 0);

		return (
			<div className="cartIcon">
				<a href={cartLink}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
				{itemsCount > 0 &&
					<div className="cartBadge">
						{itemsCount}
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(CartIcon);
