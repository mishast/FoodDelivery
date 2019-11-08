import React from 'react';
import Logo from "./Logo";

class Header extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer_inside">
						<div className="copyright">
							<Logo />
							<div className="year">© 2019</div>
						</div>
						<div className="contacts">
							<p>1066 Kiely Blvd</p>
							<p>Santa Clara, CA 95051</p>
							<p>+1 408-246-0025</p>
							<p>sales@shop.com</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Header;
