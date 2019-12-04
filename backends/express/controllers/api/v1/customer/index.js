import jwt from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import config from '../../../../config';
import checkCustomerAuth from '../../../../utils/checkCustomerAuth';
import errorHandler from '../../../../utils/errorHandler';

const getCustomerId = async (req, res, next) => {
	req.customerId = req.params.id;
	next();
};

const createCustomer = async (req, res) => {
	try {
		const { db } = req.app;

		const customer = await db.collection('customers').insertOne({});

		const customerId = customer.insertedId;

		const payload = { customer_id: customerId };
		const secret = config.jwtSecret;
		const jwtToken = jwt.sign(payload, secret);

		const response = {
			customer_id: customerId,
			token: jwtToken
		};

		await db.collection('carts').insertOne({
			_id: customerId,
			items: []
		});

		res.status(200).json(response);
	} catch (err) {
		errorHandler(err, req, res);
	}
};

const getFullItems = async (db, items) => {
	const fullItemsPromises = items.map(async item => {
		const filter = {
			_id: new ObjectID(item.product_id)
		};

		const product = await db.collection('products').findOne(filter);

		return {
			product_id: item.product_id,
			title: product.title,
			description: product.description,
			image: product.image,
			price: product.price,
			qty: item.qty
		};
	});

	const fullItems = Promise.all(fullItemsPromises);

	return fullItems;
};

const getCart = [
	getCustomerId,
	checkCustomerAuth,
	async (req, res) => {
		try {
			const { db } = req.app;
			const { customerId } = req;

			console.log(`Request cart for customerId = ${customerId}`);

			const filter = {
				_id: new ObjectID(customerId)
			};

			const cart = await db.collection('carts').findOne(filter);

			const responseItems = await getFullItems(db, cart.items);

			res.status(200).json(responseItems);
		} catch (err) {
			errorHandler(err, req, res);
		}
	}
];

const updateCartItem = [
	getCustomerId,
	checkCustomerAuth,
	async (req, res) => {
		try {
			const { db } = req.app;
			const { customerId } = req;

			console.log(`Update cart for customerId = ${customerId}`);

			const filter = {
				_id: new ObjectID(customerId)
			};

			const cart = await db.collection('carts').findOne(filter);
			const { items } = cart;

			const newItem = req.body;

			if (newItem.qty < 0) {
				throw new Error('qty < 0');
			}

			const product = await db.collection('products').findOne({
				_id: new ObjectID(newItem.product_id)
			});

			if (!product) {
				throw new Error("This product doesn't exists");
			}

			const itemIndex = items.findIndex(item => item.product_id === newItem.product_id);

			if (itemIndex >= 0) {
				items[itemIndex].qty = newItem.qty;
			} else {
				items.push({
					product_id: newItem.product_id,
					qty: newItem.qty
				});
			}

			const newItems = items.filter(item => item.qty > 0);

			await db
				.collection('carts')
				.updateOne({ _id: new ObjectID(customerId) }, { $set: { items: newItems } });

			const responseItems = await getFullItems(db, newItems);

			res.status(200).json(responseItems);
		} catch (err) {
			errorHandler(err, req, res);
		}
	}
];

const checkoutCart = [
	getCustomerId,
	checkCustomerAuth,
	async (req, res) => {
		try {
			const { db } = req.app;
			const { customerId } = req;

			console.log(`Checkout cart for customerId = ${customerId}`);

			const filter = {
				_id: new ObjectID(customerId)
			};

			const cart = await db.collection('carts').findOne(filter);

			const orderItems = await getFullItems(db, cart.items);

			const orderInfo = req.body;

			const insertedOrder = await db.collection('orders').insertOne({
				status: 'new',
				items: orderItems,
				orderInfo
			});

			await db.collection('carts').updateOne(filter, { $set: { items: [] } });

			const response = {
				orderId: insertedOrder.insertedId
			};

			res.status(200).json(response);
		} catch (err) {
			errorHandler(err, req, res);
		}
	}
];

export default {
	createCustomer,
	getCart,
	updateCartItem,
	checkoutCart
};
