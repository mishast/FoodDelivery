import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class AdminMenu extends Component {
	render() {
		return (
			<Menu
				mode="inline"
				theme="dark"
				className="menu"
			>
				<Menu.Item key="1">
					<Icon type="user" />
					<span>Account</span>
				</Menu.Item>
				<SubMenu
					key="2"
					title={
						<span>
									<Icon type="shopping-cart" />
									<span>Orders</span>
								</span>
					}
				>
					<Menu.Item key="2_1" className="submenu_item">
						<Icon type="fire" />
						<span>New</span>
					</Menu.Item>
					<Menu.Item key="2_2">
						<Icon type="safety-certificate" />
						<span>Verified</span>
					</Menu.Item>
					<Menu.Item key="2_3">
						<Icon type="sync" />
						<span>InWork</span>
					</Menu.Item>
					<Menu.Item key="2_4">
						<Icon type="clock-circle" />
						<span>Ready for delivery</span>
					</Menu.Item>
					<Menu.Item key="2_5">
						<Icon type="car" />
						<span>On delivery</span>
					</Menu.Item>
					<Menu.Item key="2_6">
						<Icon type="check" />
						<span>Completed</span>
					</Menu.Item>
					<Menu.Item key="2_7">
						<Icon type="close" />
						<span>Canceled</span>
					</Menu.Item>
				</SubMenu>
				<Menu.Item key="3">
					<Icon type="appstore" />
					<span>Products</span>
				</Menu.Item>
				<Menu.Item key="4">
					<Icon type="team" />
					<span>Carriers</span>
				</Menu.Item>
				<Menu.Item key="5">
					<Icon type="logout" />
					<span>Logout</span>
				</Menu.Item>
			</Menu>
		)
	}
}

export default AdminMenu;
