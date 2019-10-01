import configureApiRoutes from './api';
import express from "express";

const router = express.Router();

configureApiRoutes(router);

router.all('*', (req, res) => {
    res.status(404).send({msg: 'not found'});
});

export default router;
