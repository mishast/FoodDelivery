import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import customerTokenMiddleware from '../middlewares/customerTokenMiddleware';

export const configureServerStore = initialState => {
	const middleware = [thunk];

	return createStore(reducer, initialState, applyMiddleware(...middleware));
};

export const configureClientStore = initialState => {
	const middleware = [thunk, customerTokenMiddleware];

	return createStore(reducer, initialState, applyMiddleware(...middleware));
};
