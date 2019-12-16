import axios from 'axios';
import config from './config';

let token = null;

const baseUrl = 'api/v1/admin';

const setToken = _token => {
	token = _token;
};

const getApiUrl = _url => {
	return config.apiBaseUrl + baseUrl + _url;
};

const login = async (username, password) => {
	try {
		const response = await axios.post(getApiUrl('/login'), {
			login: username,
			password
		});

		if (response.data) {
			const { data } = response;

			if (data.result === 'success') {
				setToken(data.token);
			}

			return data;
		}
		return {
			result: 'connection_error',
			errorText: 'Request error'
		};
	} catch (e) {
		return {
			result: 'connection_error',
			errorText: 'Request error'
		};
	}
};

const getProductsList = async () => {
	try {
		const response = await axios.get(getApiUrl('/products'), {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (response.status !== 200) {
			return null;
		}

		return response.data;
	} catch (e) {
		return null;
	}
};

const getProduct = async productId => {
	try {
		const response = await axios.get(getApiUrl(`/products/${productId}`), {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (response.status !== 200) {
			return null;
		}

		return response.data;
	} catch (e) {
		return null;
	}
};

const getOrdersList = async status => {
	try {
		const response = await axios.get(getApiUrl(`/orders?status=${status}`), {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (response.status !== 200) {
			return null;
		}

		return response.data;
	} catch (e) {
		return null;
	}
};

const getOrder = async orderId => {
	try {
		const response = await axios.get(getApiUrl(`/orders/${orderId}`), {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (response.status !== 200) {
			return null;
		}

		return response.data;
	} catch (e) {
		return null;
	}
};

const setOrderStatus = async (orderId, status) => {
	try {
		const response = await axios.post(
			getApiUrl(`/orders/${orderId}/status`),
			{
				status
			},
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);

		if (response.status !== 200) {
			return null;
		}

		return response.data;
	} catch (e) {
		return null;
	}
};

export default {
	setToken,
	login,
	getProductsList,
	getProduct,
	getOrdersList,
	getOrder,
	setOrderStatus
};
