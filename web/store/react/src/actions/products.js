import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';

const receiveProducts = products => ({
	type: types.RECEIVE_PRODUCTS,
	products
});

const loadProducts = () => {
	return async dispatch => {
		const response = await fetch('http://localhost:2000/api/v1/products');
		if (response.ok) {
			const json = await response.json();
			console.log(json);
			dispatch(receiveProducts(json));
		}
	};
};

export default {
	loadProducts
};
