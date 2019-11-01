import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import tokenMiddleware from '../middleware/tokenMiddleware';

const configureStore = token => {
	const middleware = [thunk, tokenMiddleware];

	let initialState = {
		authorized: false,
		token: null
	};

	if (token) {
		initialState = {
			...initialState,
			authorized: true,
			token
		};
	}

	return createStore(reducer, initialState, applyMiddleware(...middleware));
};

export default configureStore;
