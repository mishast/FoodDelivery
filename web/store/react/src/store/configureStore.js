import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = initialState => {
	const middleware = [thunk];

	return createStore(reducer, initialState, applyMiddleware(...middleware));
};

export default configureStore;
