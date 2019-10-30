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
import RedirectToNotFound from "./helpers/RedirectToNotFound";

const { Content } = Layout;

class AdminApp extends Component {
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
											<Route path="/admin/account" component={Account} />
											<Route path="/admin/orders/new" render={() => (<Orders orderState="new" />)} />
											<Route path="/admin/orders/verified" render={() => (<Orders orderState="verified" />)} />
											<Route path="/admin/orders/inwork" render={() => (<Orders orderState="in_work" />)} />
											<Route path="/admin/orders/ready" render={() => (<Orders orderState="ready_for_delivery" />)} />
											<Route path="/admin/orders/onDelivery" render={() => (<Orders orderState="on_delivery" />)} />
											<Route path="/admin/orders/completed" render={() => (<Orders orderState="completed" />)} />
											<Route path="/admin/orders/canceled" render={() => (<Orders orderState="canceled" />)} />
											<Route path="/admin/products/new" component={NewProduct} />
											<Route path="/admin/products/list" component={ListProducts} />
											<RedirectToNotFound />
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

export default AdminApp;
