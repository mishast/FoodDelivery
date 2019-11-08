import React from 'react';
import {Link} from "react-router-dom";

class Logo extends React.Component {

	render() {
		return (
			<Link to="/" className="logo_link">
				<div className="logo">
					<span className="logo_part1">Food</span>
					<span className="logo_part2">Delivery</span>
				</div>
			</Link>
		);
	}
}

export default Logo;
