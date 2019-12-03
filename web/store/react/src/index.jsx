import React from 'react';
import { Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './assets/scss/main.scss';
import { configureClientStore } from './store/configureStore';
import initActions from './actions/init';
import history from './helpers/history';

let initialState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

initialState = {
	...initialState,
	customer: null,
	cart: [],
	checkout: {
		isSubmitting: false
	}
};

let store = configureClientStore(initialState);

store.dispatch(initActions.initApp());

ReactDOM.hydrate(
	<Router history={history}>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
	,
	document.getElementById("app")
);
