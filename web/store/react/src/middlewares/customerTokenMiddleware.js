import * as types from '../constants/actionTypes';

const customerTokenMiddleware = () => next => action => {
	if (action.type === types.SET_CUSTOMER) {
		window.localStorage.setItem('customerId', action.customer.customer_id);
		window.localStorage.setItem('customerToken', action.customer.token);
	}

	next(action);
};

export default customerTokenMiddleware;
