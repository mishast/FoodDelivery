import * as types from '../constants/actionTypes';
import agent from '../agent'
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

