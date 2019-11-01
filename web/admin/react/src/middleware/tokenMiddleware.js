import * as types from '../constants/actionTypes';

const tokenMiddleware = () => next => action => {
	if (action.type === types.LOGIN) {
		window.localStorage.setItem('token', action.token);
	} else if (action.type === types.LOGOUT) {
		window.localStorage.setItem('token', '');
	}

	next(action);
};

export default tokenMiddleware;
