import mongodbUri from 'mongodb-uri';
import mongoClient from 'mongodb';
import config from '../config';

let db = null;

const connect = callback => {
	const mongoUri = mongodbUri.parse(config.mongoUrl);
	mongoClient.connect(config.mongoUrl, (err, client) => {
		if (err) {
			console.log("Can't connect to MongoDB");
		} else {
			db = client.db(mongoUri.database);
			callback(db);
		}
	});
};

const getDb = () => {
	return db;
};

export default {
	connect,
	getDb
};
