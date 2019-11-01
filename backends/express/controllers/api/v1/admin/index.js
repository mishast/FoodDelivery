import uuidv4 from 'uuid/v4';
import config from "../../../../config";
import jwt from "jsonwebtoken";

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

function getOrders(req, res, next) {}

function getOrder(req, res, next) {}

function setOrderStatus(req, res, next) {}

function getProducts(req, res, next) {}

function createOrUpdateProduct(req, res, next) {}

function deleteProduct(req, res, next) {}

function getProduct(req, res, next) {}

const addProductImage = async (req, res, next) => {
};

const deleteProductImage = (req, res, next) => {

};

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
