import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import config from '../../../../config';
import checkAdminAuth from '../../../../utils/checkAdminAuth';
import errorHandler from '../../../../utils/errorHandler';

function login(req, res) {
	const authData = req.body;

	let response = {
		result: 'error',
		errorText: 'Invalid login or password'
	};

	if (authData.login === 'demo' && authData.password === 'demo') {
		const payload = {
			user_id: 'sdfsdfsd',
			role: 'admin'
		};
		const secret = config.jwtSecret;
		const jwtToken = jwt.sign(payload, secret);

		response = {
			result: 'success',
			user_id: 'sdfsdfsd',
			role: 'admin',
			token: jwtToken
		};
	}

	res.status(200).json(response);
}

const getOrders = [
	checkAdminAuth,
	async (req, res) => {
		try {
			console.log('req.query');
			console.log(JSON.stringify(req.query));

			const { db } = req.app;
			const { status } = req.query;

			let queryFilter = {};

			if (status) {
				queryFilter = { status };
			}

			console.log('queryFilter:');
			console.log(JSON.stringify(queryFilter));

			const products = await db
				.collection('orders')
				.find(queryFilter)
				.toArray();

			res.status(200).json(products);
		} catch (err) {
			errorHandler(err, req, res);
		}
	}
];

function getOrder(req, res, next) {}

function setOrderStatus(req, res, next) {}

const getProducts = [
	checkAdminAuth,
	async (req, res) => {
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
	}
];

function createOrUpdateProduct(req, res, next) {}

function deleteProduct(req, res, next) {}

function getProduct(req, res, next) {}

const addProductImage = async (req, res, next) => {};

const deleteProductImage = (req, res, next) => {};

export default {
	login,
	getOrders,
	getOrder,
	setOrderStatus,
	getProducts,
	createOrUpdateProduct,
	deleteProduct,
	getProduct,
	addProductImage,
	deleteProductImage
};
