import axios from 'axios';
import * as types from '../constants/actionTypes';
import config from '../config';

const receiveProducts = products => ({
	type: types.RECEIVE_PRODUCTS,
	products
});

const loadProducts = () => {
	return async dispatch => {
		const productsResponse = await axios.get(
			`${config.apiBaseUrl}api/v1/products`
		);
		if (productsResponse.status === 200) {
			const products = productsResponse.data;
			console.log(products);
			dispatch(receiveProducts(products));
		}
	};
};

export default {
	loadProducts
};
