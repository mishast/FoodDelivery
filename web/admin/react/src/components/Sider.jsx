import React, { Component } from 'react';
import { Layout } from 'antd';
import AdminMenu from './AdminMenu';
import SiderLogo from './SiderLogo';

class Sider extends Component {
	render() {
		return (
				<Layout.Sider width="240" className="sider">
					<SiderLogo />
					<AdminMenu />
				</Layout.Sider>
		);
	}
}

export default Sider;
