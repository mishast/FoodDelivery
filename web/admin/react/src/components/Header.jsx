import React, { Component } from 'react';
import { Layout } from 'antd';

class Header extends Component {
	render() {
		return (
			<Layout.Header className="header">
				<div className="header_burger">
					<button	className="burgerBtn" />
				</div>
			</Layout.Header>
		);
	}
}

export default Header;
