import * as types from '../constants/actionTypes';
import agent from '../agent';
export const closeDrawer = () => ({ type: types.CLOSE_DRAWER });

export const toggleDrawer = () => ({ type: types.TOGGLE_DRAWER });

export const setMobile = isMobile => ({
	type: types.SET_MOBILE,
	isMobile
});

export const login = token => ({ type: types.LOGIN, token });

export const logout = () => ({ type: types.LOGOUT });

const receiveProducts = products => ({
	type: types.RECEIVE_PRODUCTS,
	products
});

export const getProducts = () => {
	return async dispatch => {
		const products = await agent.getProducts();
		if (products) {
			dispatch(receiveProducts(products));
		}
	};
};

const receiveOrdersList = (status, orders) => ({
	type: types.RECEIVE_ORDERS_LIST,
	status,
	orders
});

const receiveOrder = order => ({
	type: types.RECEIVE_ORDER,
	order
});

export const getOrdersList = status => {
	return async dispatch => {
		console.log('get orders');
		const orders = await agent.getOrdersList(status);
		console.log('orders:');
		console.log(orders);

		if (orders) {
			dispatch(receiveOrdersList(status, orders));
		}
	};
};

export const getOrder = orderId => {
	return async dispatch => {
		console.log('get order');
		const order = await agent.getOrder(orderId);
		console.log('order:');
		console.log(order);

		if (order) {
			dispatch(receiveOrder(order));
		}
	};
};

export const setOrderStatus = (orderId, newStatus) => {
	return async (dispatch, getState) => {
		await agent.setOrderStatus(orderId, newStatus);

		const state = getState();

		const currentStatus = state.ordersStatus;

		dispatch(getOrdersList(currentStatus));
	};
};
