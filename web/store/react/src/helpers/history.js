import { createBrowserHistory, createMemoryHistory } from 'history';

let createHistory = null;

if (typeof window !== 'undefined') {
	createHistory = createBrowserHistory;
} else {
	createHistory = createMemoryHistory;
}

export default createHistory();
