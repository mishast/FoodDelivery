import * as types from '../constants/actionTypes';

const initialState = {
	drawerVisible: false,
	isMobile: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CLOSE_DRAWER:
			return {
				...state,
				drawerVisible: false
			};
		case types.TOGGLE_DRAWER:
			return {
				...state,
				drawerVisible: !state.drawerVisible
			};
		case types.SET_MOBILE:
			if (state.isMobile != action.isMobile) {
				return {
					...state,
					isMobile: action.isMobile,
					drawerVisible: false
				};
			}
			else {
				return state;
			}
		default:
			return state;
	}
};
