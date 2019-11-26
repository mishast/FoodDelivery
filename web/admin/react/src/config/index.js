const prodApiBaseUrl = 'https://api.food-delivery.mishast.com/';
const devApiBaseUrl = 'http://localhost:2000/';

const config = {
	apiBaseUrl:
		process.env.NODE_ENV === 'production' ? prodApiBaseUrl : devApiBaseUrl
};

export default config;
