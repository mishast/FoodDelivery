import config from './config'
import morgan from 'morgan'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import routes from './routes';

const app = express();

if (config.env === 'development') {
    app.use(morgan('dev'))
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet())

app.use('/', routes);

export default app;
