import express from 'express';
import configureApiRoutes from './api';
import configureFilesRoutes from './files';

const router = express.Router();

configureApiRoutes(router);
configureFilesRoutes(router);

router.all('*', (req, res) => {
	res.status(404).send({ msg: 'not found' });
});

export default router;
