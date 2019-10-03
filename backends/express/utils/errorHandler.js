import config from '../config';

const errorHandler = (err, req, res) => {
	let errorText = null;

	if (config.showStacktrace) {
		errorText = err.stack;
	} else {
		errorText = err.toString();
	}

	res.status(500).json({
		error: errorText
	});
};

export default errorHandler;
