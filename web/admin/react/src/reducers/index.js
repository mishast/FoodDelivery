import * as types from '../constants/actionTypes';

const initialState = {
	drawerVisible: false,
	isMobile: false,
	authorized: true,
	token: null,
	products: null,
	productLoading: false,
	product: null,
	ordersStatus: null,
	orders: null,
	order: null
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
			if (state.isMobile !== action.isMobile) {
				return {
					...state,
					isMobile: action.isMobile,
					drawerVisible: false
				};
			}

			return state;

		case types.LOGIN:
			return {
				...state,
				authorized: true,
				token: action.token
			};

		case types.LOGOUT:
			return {
				...state,
				authorized: false,
				token: null
			};

		case types.RECEIVE_PRODUCTS_LIST:
			return {
				...state,
				products: action.products
			};

		case types.RECEIVE_PRODUCT_BEGIN:
			return {
				...state,
				productLoading: true,
				product: null
			};

		case types.RECEIVE_PRODUCT_COMPLETED:
			return {
				...state,
				productLoading: false,
				product: action.product
			};

		case types.RECEIVE_ORDERS_LIST:
			return {
				...state,
				ordersStatus: action.status,
				orders: action.orders
			};

		case types.RECEIVE_ORDER:
			return {
				...state,
				order: action.order
			};

		default:
			return state;
	}
};
