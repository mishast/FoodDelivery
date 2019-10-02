import dotenv from 'dotenv';

dotenv.config({});

const config = {
	env: process.env.NODE_ENV || 'development',
	server: {
		host: process.env.HOST || '0.0.0.0',
		port: process.env.PORT || 3000
	},
	mongoUrl: 'mongodb://localhost/foodDelivery',
	jwtSecret: process.env.JWT_SECRET || 'sdfsdfsdf'
};

export default config;
