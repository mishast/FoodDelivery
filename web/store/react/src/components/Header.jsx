import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<div className="header_shadow">
				<div className="container">
					<header>
						<div className="logo"><span className="logo_part1">Food</span><span className="logo_part2">Delivery</span>
						</div>
						<div className="circle"><a href=""><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></div>
					</header>
				</div>
			</div>
		);
	}
}

export default Header;
