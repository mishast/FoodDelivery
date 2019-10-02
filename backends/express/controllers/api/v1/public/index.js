import {ObjectID} from 'mongodb';

const getProducts = async (req, res) => {
	try {
		let db = req.app.db;

		let products = await db.collection('products').find({}).toArray();

		res.status(200).json(products);
	}
	catch (err) {
		res.status(500).json({"error": err});
	}

};

const getProduct = async (req, res) => {
	try {
		let db = req.app.db;
		let productId = req.params.id;

		console.log('Request product with productId = ' + productId);

		const filter = {
			_id: new ObjectID(productId),
		};

		let product = await db.collection('products').findOne(filter);

		res.status(200).json(product);
	}
	catch (err) {
		res.status(500).json({"error": err});
	}
};

export default {
	getProducts,
	getProduct
};
