import dotenv from 'dotenv';

dotenv.config({});

const config = {
	env: process.env.NODE_ENV || 'development',
	server: {
		host: process.env.HOST || '0.0.0.0',
		port: process.env.PORT || 3000
	},
	mongo_url: '11112233',
	jwt_secret: process.env.JWT_SECRET || 'sdfsdfsdf'
};

export default config;
