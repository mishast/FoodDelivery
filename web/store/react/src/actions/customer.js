import axios from 'axios';
import * as types from '../constants/actionTypes';
import config from "../config";

const setCustomer = customer => ({
	type: types.SET_CUSTOMER,
	customer
});

const setCart = cart => ({
	type: types.SET_CART,
	cart
});

const updateCartItem = (productId, qty) => {
	return async (dispatch, getState) => {
		const { customer } = getState();

		axios.post(`${config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart/items`,
			{"product_id": productId, qty: qty},
			{
				headers: {'Authorization': "bearer " + customer.token}
			}
			);

	
	};
};

export default {
	setCustomer,
	setCart
};
