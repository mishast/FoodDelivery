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
			let data = response.data;

			if (data.result === 'success') {
				setToken(data.token);
			}

			return data;
		} else {
			return {
				result: 'connection_error',
				errorText: 'Request error'
			};
		}
	} catch (e) {
		return {
			result: 'connection_error',
			errorText: 'Request error'
		};
	}
};

export default {
	setToken,
	login
};
