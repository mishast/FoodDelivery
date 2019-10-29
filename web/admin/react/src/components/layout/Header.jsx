import React, { Component } from 'react';
import { Layout } from 'antd';
import {connect} from "react-redux";
import {toggleDrawer} from "../../actions";

class Header extends Component {
	onBurgerClicked = () => {
		this.props.toggleDrawer();
	};

	render() {
		return (
			<Layout.Header className="header">
				{ this.props.isMobile &&
					<div className="header_burger">
						<button	className="burgerBtn" onClick={this.onBurgerClicked}/>
					</div>
				}
			</Layout.Header>
		);
	}
}

const mapDispatchToProps = {
	toggleDrawer
};

function mapStateToProps(state) {
	return {
		isMobile: state.isMobile
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
