import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './assets/scss/main.scss';
import { configureClientStore } from './store/configureStore';
import initActions from './actions/init';

const initialState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

initialState.customer = null;

const customerId = window.localStorage.getItem('customerId');
const customerToken = window.localStorage.getItem('customerToken');

if (customerId && customerToken) {
	console.log('load customer from storage');
	initialState.customer = {
		customer_id: customerId,
		token: customerToken
	};
}

let store = configureClientStore(initialState);

store.dispatch(initActions.initApp());

ReactDOM.hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
