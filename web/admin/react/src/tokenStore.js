const getToken = () => {
	return window.localStorage.getItem('token');
};

export default {
	getToken
};
