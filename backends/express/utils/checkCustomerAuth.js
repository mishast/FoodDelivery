import jwt from 'jsonwebtoken';
import config from '../config';

const checkCustomerAuth = (req, res, next) => {
	let customerId = null;

	const authorizationHeader = req.headers.authorization;

	if (authorizationHeader) {
		try {
			const token = authorizationHeader.split(' ')[1]; // Bearer <token>

			const customer = jwt.verify(token, config.jwtSecret);

			if (customer && customer.customer_id) {
				customerId = customer.customer_id;
			}
		} catch (err) {
			customerId = null;
		}
	}

	if (req.customerId && customerId && req.customerId === customerId) {
		next();
		return;
	}

	res.status(403).send({ error: 'unauthorized' });
};

export default checkCustomerAuth;
