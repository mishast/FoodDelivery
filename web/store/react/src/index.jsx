import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './assets/scss/main.scss';
import configureStore from './store/configureStore';

const initialState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

let store = configureStore(initialState);

ReactDOM.hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
