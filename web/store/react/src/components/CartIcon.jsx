import React from 'react';

class CartIcon extends React.Component {

	render() {
		let cartLink = "";
		let itemsCount = 1;

		return (
			<div className="cartIcon">
				<a href={cartLink}><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
				<div className="cartBadge">{itemsCount}</div>
			</div>
		);
	}
}

export default CartIcon;
