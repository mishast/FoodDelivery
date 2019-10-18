import React from 'react';
import CartIcon from './CartIcon';

class Header extends React.Component {

	render() {
		return (
			<div className="header_shadow">
				<div className="container">
					<header>
						<div className="logo"><span className="logo_part1">Food</span><span className="logo_part2">Delivery</span>
						</div>
						<CartIcon />
					</header>
				</div>
			</div>
		);
	}
}

export default Header;
