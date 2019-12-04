import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import { Provider } from 'react-redux';
import webpackDevConfig from '../webpack.dev';
import App from "./components/App";
import { configureServerStore } from './store/configureStore';
import SsrRoutes from './ssrRoutes';

const app = express();

if(process.env.NODE_ENV !== 'production'){
	const webpackClientConfig = webpackDevConfig[0];
	const compiler = webpack(webpackClientConfig);
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackClientConfig.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
	console.log('Start DEV server');
} else {
	console.log('Start Production server');
	app.use('/static', express.static(path.resolve(__dirname, 'public')));
}

const renderPage = (html, initialState) => {
	return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>FoodDelivery - delicious food within minutes</title>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/static/main.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${serialize(initialState)}; 
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
};

app.get('/*', function (req, res) {
	const currentRoute = SsrRoutes.find(route => matchPath(req.url, route)) || {};

	if (currentRoute.action)
	{
		const store = configureServerStore();

		const loadDataAction = currentRoute.action;

		store.dispatch(loadDataAction()).then(() => {
			const componentHtml = ReactDOM.renderToString(
				<StaticRouter location={req.url} context={{}}>
					<Provider store={store}>
						<App />
					</Provider>
				</StaticRouter>
			);

			const initialState = store.getState();

			const html = renderPage(componentHtml, initialState);
			res.send(html);
		});

		return;
	}

	let html = renderPage('', '');
	res.send(html);
});

const server = app.listen(3000, function () {
	const host = server.address().address;
	const port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
