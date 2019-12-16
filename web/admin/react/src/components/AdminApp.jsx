import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './layout/Sider';
import Header from './layout/Header';
import MobileDetector from "./helpers/MobileDetector";
import {BrowserRouter} from "react-router-dom";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Order from './pages/order/Order';
import Orders from './pages/orders/Orders';
import NewProduct from './pages/products/NewProduct';
import ListProducts from './pages/products/ListProducts';
import Product from './pages/products/Product';
import Account from "./pages/account/Account";

const { Content } = Layout;

class AdminApp extends Component {
	render() {
		return (
			<Layout style={{ height: '100vh' }}>
				<Sider />
				<Layout>
					<Header />
					<Content>
						<div className="contentWrapper">

								<Switch>
									<Route path="/admin/account" component={Account} />
									<Route path="/admin/orders/new" render={() => (<Orders orderStatus="new" />)} />
									<Route path="/admin/orders/verified" render={() => (<Orders orderStatus="verified" />)} />
									<Route path="/admin/orders/inwork" render={() => (<Orders orderStatus="in_work" />)} />
									<Route path="/admin/orders/ready" render={() => (<Orders orderStatus="ready_for_delivery" />)} />
									<Route path="/admin/orders/onDelivery" render={() => (<Orders orderStatus="on_delivery" />)} />
									<Route path="/admin/orders/completed" render={() => (<Orders orderStatus="completed" />)} />
									<Route path="/admin/orders/canceled" render={() => (<Orders orderStatus="canceled" />)} />
									<Route path="/admin/orders/view/:id" render={(props) => (<Order orderId={props.match.params.id} />)} />
									<Route path="/admin/products/new" component={NewProduct} />
									<Route path="/admin/products/list" component={ListProducts} />
									<Route path="/admin/products/:id" render={(props) => (<Product productId={props.match.params.id} />)} />
									<Route path="/admin" exact>
										<Redirect to="/admin/orders/new" />
									</Route>
									<Route>
										<Redirect to="/404" />
									</Route>
								</Switch>
							</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default AdminApp;
