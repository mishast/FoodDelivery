import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/scss/main.scss';

ReactDOM.hydrate(<App />, document.getElementById("app"));
