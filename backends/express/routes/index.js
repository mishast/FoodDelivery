import configureApiRoutes from './api';
import express from "express";

const router = express.Router();

configureApiRoutes(router);

export default router;
