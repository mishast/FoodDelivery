import express from 'express';
import configureApiRoutes from './api';

const router = express.Router();

configureApiRoutes(router);

router.all('*', (req, res) => {
	res.status(404).send({ msg: 'not found' });
});

export default router;
