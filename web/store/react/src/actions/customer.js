import axios from 'axios';
import * as types from '../constants/actionTypes';
import config from '../config';
import history from '../helpers/history';

const setCustomer = customer => ({
	type: types.SET_CUSTOMER,
	customer
});

const setCart = cart => ({
	type: types.SET_CART,
	cart
});

const checkoutStart = () => ({
	type: types.CHECKOUT_START
});

const checkoutEnd = () => ({
	type: types.CHECKOUT_END
});

const addCartItem = productId => {
	return async (dispatch, getState) => {
		const { customer, cart } = getState();

		const filteredCart = cart.filter(item => item.product_id === productId);

		let cartItem = null;

		if (filteredCart.length > 0) {
			[cartItem] = filteredCart;
		}

		if (cartItem) {
			cartItem.qty += 1;
		} else {
			cartItem = { product_id: productId, qty: 1 };
		}

		const auth = {
			headers: { Authorization: `bearer ${customer.token}` }
		};

		const updateCartResponse = await axios.post(
			`${config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/updateItem`,
			cartItem,
			auth
		);

		if (updateCartResponse.status === 200) {
			const newCart = updateCartResponse.data;

			dispatch(setCart(newCart));
		} else {
			console.log(
				`updateCartItem error. Status = ${updateCartResponse.status}`
			);
		}
	};
};

const updateCartItem = (productId, qty) => {
	return async (dispatch, getState) => {
		const { customer } = getState();

		const auth = {
			headers: { Authorization: `bearer ${customer.token}` }
		};
		const cartItem = { product_id: productId, qty };

		const updateCartResponse = await axios.post(
			`${config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/updateItem`,
			cartItem,
			auth
		);

		if (updateCartResponse.status === 200) {
			const newCart = updateCartResponse.data;

			dispatch(setCart(newCart));
		} else {
			console.log(
				`updateCartItem error. Status = ${updateCartResponse.status}`
			);
		}
	};
};

const checkout = checkoutInfo => {
	return async (dispatch, getState) => {
		const { customer } = getState();

		dispatch(checkoutStart());

		const auth = {
			headers: { Authorization: `bearer ${customer.token}` }
		};

		const checkoutResponse = await axios.post(
			`${config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/checkout`,
			checkoutInfo,
			auth
		);

		if (checkoutResponse.status === 200) {
			dispatch(checkoutEnd());
			history.push('/thankYou');
		} else {
			console.log(`checkout error. Status = ${checkoutResponse.status}`);
		}
	};
};

export default {
	setCustomer,
	setCart,
	updateCartItem,
	addCartItem,
	checkout
};
