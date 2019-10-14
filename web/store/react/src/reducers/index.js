import * as types from '../constants/actionTypes';

const initialState = {
	products: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.RECEIVE_PRODUCTS:
			console.log(JSON.stringify(action));

			return {
				...state,
				products: action.products
			};
		default:
			return state;
	}
};
