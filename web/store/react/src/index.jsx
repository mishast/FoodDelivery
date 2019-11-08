import React from 'react';
import { BrowserRouter } from "react-router-dom";
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
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	,
	document.getElementById("app")
);
