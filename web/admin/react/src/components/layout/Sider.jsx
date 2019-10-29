import React, { Component } from 'react';
import { Layout, Drawer } from 'antd';
import AdminMenu from '../AdminMenu';
import SiderLogo from './SiderLogo';
import { connect } from 'react-redux';
import { closeDrawer } from '../../actions';

class Sider extends Component {

	onClose = () => {
		this.props.closeDrawer();
	};

	render() {
		return this.props.isMobile? (
			<Drawer
				placement="left"
				width="240"
				closable={false}
				onClose={this.onClose}
				drawerStyle={{ background: 'black' }}
				visible={this.props.drawerVisible}
			>
				<SiderLogo />
				<AdminMenu />
			</Drawer>
		) : (
			<Layout.Sider width="240" className="sider">
				<SiderLogo />
				<AdminMenu />
			</Layout.Sider>
		);
	}
}

const mapDispatchToProps = {
	closeDrawer
};

function mapStateToProps(state) {
	return {
		drawerVisible: state.drawerVisible,
		isMobile: state.isMobile
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sider);
