import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';

const receiveProducts = products => ({
	type: types.RECEIVE_PRODUCTS,
	products
});

const loadProducts = () => {
	return dispatch => {
		return fetch('http://localhost:2000/api/v1/products').then(response => {
			response.json().then( json => {
				if (response.ok) {
					console.log(json);
					dispatch(receiveProducts(json));
				}
			});
		});
	};
};

export default {
	loadProducts
};
