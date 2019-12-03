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

const receiveOrders = (status, orders) => ({
	type: types.RECEIVE_ORDERS,
	status,
	orders
});

export const getOrders = status => {
	return async dispatch => {
		console.log('get orders');
		const orders = await agent.getOrders(status);
		console.log('orders:');
		console.log(orders);

		if (orders) {
			dispatch(receiveOrders(status, orders));
		}
	};
};

export const setOrderStatus = (orderId, newStatus) => {
	return async (dispatch, getState) => {

		await agent.setOrderStatus(orderId, newStatus);

		const state = getState();

		const currentStatus = state.ordersStatus;

		dispatch(getOrders(currentStatus));
	}
};
