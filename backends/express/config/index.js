import dotenv from 'dotenv';

dotenv.config({});

let showStacktrace = true;

if ('SHOW_STACKTRACE' in process.env) {
	showStacktrace = process.env.SHOW_STACKTRACE;
}

const config = {
	env: process.env.NODE_ENV || 'development',
	server: {
		host: process.env.HOST || '0.0.0.0',
		port: process.env.PORT || 2000
	},
	mongoUrl: 'mongodb://localhost/foodDelivery',
	jwtSecret: process.env.JWT_SECRET || 'sdfsdfsdf',
	showStacktrace
};

export default config;
