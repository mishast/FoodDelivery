import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
	render() {
		return (
			<Layout style={{ height: '100vh' }}>
				<Header>Header</Header>
				<Layout>
					<Sider>
						<Menu
							mode="inline"
							theme="dark"
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
								<Menu.Item key="1">
									<Icon type="fire" />
									<span>New</span>
								</Menu.Item>
								<Menu.Item key="2">
									<Icon type="safety-certificate" />
									<span>Verified</span>
								</Menu.Item>
								<Menu.Item key="3">
									<Icon type="sync" />
									<span>InWork</span>
								</Menu.Item>
								<Menu.Item key="4">
									<Icon type="clock-circle" />
									<span>Ready for delivery</span>
								</Menu.Item>
								<Menu.Item key="5">
									<Icon type="car" />
									<span>On delivery</span>
								</Menu.Item>
								<Menu.Item key="6">
									<Icon type="check" />
									<span>Completed</span>
								</Menu.Item>
								<Menu.Item key="7">
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
					</Sider>
					<Content>Content
						<Footer>Footer</Footer>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default App;
