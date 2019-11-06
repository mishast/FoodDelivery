import axios from 'axios';
import customerActions from './customer';
import config from '../config';

const initApp = () => {
	return async dispatch => {
		let customer = null;

		const customerId = window.localStorage.getItem('customerId');
		const customerToken = window.localStorage.getItem('customerToken');

		if (customerId && customerToken) {
			console.log('load customer from storage');
			customer = {
				customer_id: customerId,
				token: customerToken
			};

			dispatch(customerActions.setCustomer(customer));

			console.log('load cart from server');

			const cart = await axios.get(`${config.apiBaseUrl}api/v1/customer/${customer.customer_id}/cart`,
				{
					headers: {'Authorization': "bearer " + token}
				}
			);

			console.log('cart:' );
			console.log(cart);

			dispatch(customerActions.setCart(cart));
		} else {
			console.log('create new customer');
			customer = await axios.get(`${config.apiBaseUrl}api/v1/customer`);
			console.log(customer);
			dispatch(customerActions.setCustomer(customer));
			const cart = [];
			console.log('set empty cart');
			dispatch(customerActions.setCart(cart));
		}
	};
};

export default {
	initApp
};
