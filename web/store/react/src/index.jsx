import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './assets/scss/main.scss';
import { configureClientStore } from './store/configureStore';
import initActions from './actions/init';

let initialState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

initialState = {
	...initialState,
	customer: null,
	cart: []
};

let store = configureClientStore(initialState);

store.dispatch(initActions.initApp());

ReactDOM.hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
