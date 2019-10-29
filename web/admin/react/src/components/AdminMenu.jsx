import { Link } from 'react-router-dom';
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
					<Link to="/account">
						<Icon type="user" />
						<span>Account</span>
					</Link>
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
						<Link to="/orders/new">
							<Icon type="fire" />
							<span>New</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2_2">
						<Link to="/orders/verified">
							<Icon type="safety-certificate" />
							<span>Verified</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2_3">
						<Link to="/orders/inWork">
							<Icon type="sync" />
							<span>InWork</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2_4">
						<Link to="/orders/ready">
							<Icon type="clock-circle" />
							<span>Ready for delivery</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2_5">
						<Link to="/orders/onDelivery">
							<Icon type="car" />
							<span>On delivery</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2_6">
						<Link to="/orders/completed">
							<Icon type="check" />
							<span>Completed</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="2_7">
						<Link to="/orders/canceled">
							<Icon type="close" />
							<span>Canceled</span>
						</Link>
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="3"
					title={
						<span>
							<Icon type="appstore" />
							<span>Products</span>
						</span>
					}
				>
					<Menu.Item key="3_1">
						<Link to="/products/new">
							<Icon type="plus" />
							<span>New</span>
						</Link>
					</Menu.Item>
					<Menu.Item key="3_2">
						<Link to="/products/list">
							<Icon type="bars" />
							<span>List</span>
						</Link>
					</Menu.Item>
				</SubMenu>
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
