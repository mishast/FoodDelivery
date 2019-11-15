import jwt from 'jsonwebtoken';
import config from '../config';

const checkAdminAuth = (req, res, next) => {
	let userId = '';
	let role = '';

	const authorizationHeader = req.headers.authorization;

	if (authorizationHeader) {
		try {
			const token = authorizationHeader.split(' ')[1]; // Bearer <token>

			const user = jwt.verify(token, config.jwtSecret);

			if (user) {
				if (user.user_id) {
					userId = user.user_id;
				}
				if (user.role) {
					role = user.role;
				}
			}
		} catch (err) {
			userId = null;
		}
	}

	if (userId && role === 'admin') {
		next();
		return;
	}

	res.status(403).send({ error: 'unauthorized' });
};

export default checkAdminAuth;
