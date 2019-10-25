import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './Sider';
import Header from './Header';
import MobileDetector from "./MobileDetector";

const { Footer, Content } = Layout;

class App extends Component {
	render() {
		return (
			<MobileDetector>
				<Layout style={{ height: '100vh' }}>
					<Sider />
					<Layout>
						<Header />
						<Content>Content
							<Footer>Footer</Footer>
						</Content>
					</Layout>
				</Layout>
			</MobileDetector>
		);
	}
}

export default App;
