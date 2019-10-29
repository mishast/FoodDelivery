import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './layout/Sider';
import Header from './layout/Header';
import MobileDetector from "./helpers/MobileDetector";
import {BrowserRouter} from "react-router-dom";
import { Route, Switch } from "react-router";
import Orders from './pages/orders/Orders';
import NewProduct from './pages/products/NewProduct';
import ListProducts from './pages/products/ListProducts';
import Account from "./pages/account/Account";

const { Footer, Content } = Layout;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MobileDetector>
					<Layout style={{ height: '100vh' }}>
						<Sider />
						<Layout>
							<Header />
							<Content>
								<div className="contentWrapper">
									<div className="content">
										<Switch>
											<Route path="/account" component={Account} />
											<Route path="/orders/new" render={() => (<Orders orderState="new" />)} />
											<Route path="/orders/verified" render={() => (<Orders orderState="verified" />)} />
											<Route path="/orders/inwork" render={() => (<Orders orderState="in_work" />)} />
											<Route path="/orders/ready" render={() => (<Orders orderState="ready_for_delivery" />)} />
											<Route path="/orders/onDelivery" render={() => (<Orders orderState="on_delivery" />)} />
											<Route path="/orders/completed" render={() => (<Orders orderState="completed" />)} />
											<Route path="/orders/canceled" render={() => (<Orders orderState="canceled" />)} />
											<Route path="/products/new" component={NewProduct} />
											<Route path="/products/list" component={ListProducts} />
										</Switch>
									</div>
								</div>
							</Content>
						</Layout>
					</Layout>
				</MobileDetector>
			</BrowserRouter>
		);
	}
}

export default App;
