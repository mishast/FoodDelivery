import React from 'react';
import CartIcon from './CartIcon';
import Logo from "./Logo";

class Header extends React.Component {

	render() {
		return (
			<div className="header_shadow">
				<div className="container">
					<header>
						<Logo />
						<CartIcon />
					</header>
				</div>
			</div>
		);
	}
}

export default Header;
