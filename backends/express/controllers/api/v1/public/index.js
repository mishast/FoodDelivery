import { ObjectID } from 'mongodb';
import errorHandler from '../../../../utils/errorHandler';

const getProducts = async (req, res) => {
	try {
		const { db } = req.app;

		const products = await db
			.collection('products')
			.find({})
			.toArray();

		res.status(200).json(products);
	} catch (err) {
		errorHandler(err, req, res);
	}
};

const getProduct = async (req, res) => {
	try {
		const { db } = req.app;
		const productId = req.params.id;

		console.log(`Request product with productId = ${productId}`);

		const filter = {
			_id: new ObjectID(productId)
		};

		const product = await db.collection('products').findOne(filter);

		res.status(200).json(product);
	} catch (err) {
		errorHandler(err, req, res);
	}
};

export default {
	getProducts,
	getProduct
};
