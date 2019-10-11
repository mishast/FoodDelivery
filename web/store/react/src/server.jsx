import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import ReactDOM from 'react-dom/server';
import webpackDevConfig from '../webpack.dev';
import App from "./components/App";

const app = express();

if(process.env.NODE_ENV !== 'production'){
	const webpackClientConfig = webpackDevConfig[0];
	const compiler = webpack(webpackClientConfig);
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackClientConfig.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
}else{
	app.use('/', express.static(__dirname + '/../../dist/public'));
}

const renderPage = (html, initialState) => {
	return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};

app.get('/*', function (req, res) {
	let componentHtml = ReactDOM.renderToString(<App />);
	let html = renderPage(componentHtml, {});
	res.send(html);
});

const server = app.listen(3000, function () {
	const host = server.address().address;
	const port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
