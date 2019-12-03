import * as types from '../constants/actionTypes';

const initialState = {
	products: [],
	customer: null,
	cart: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.RECEIVE_PRODUCTS:
			console.log(JSON.stringify(action));

			return {
				...state,
				products: action.products
			};
		case types.SET_CUSTOMER:
			return {
				...state,
				customer: action.customer
			};
		case types.SET_CART:
			return {
				...state,
				cart: action.cart
			};
		case types.CHECKOUT_START:
			return {
				...state,
				checkout: {
					isSubmitting: true
				}
			};
		case types.CHECKOUT_END:
			return {
				...state,
				checkout: {
					isSubmitting: false
				},
				cart: []
			};
		default:
			return state;
	}
};
