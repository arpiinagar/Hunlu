const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: any) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://localhost:2525',
			changeOrigin: true,
		})
	);
};

export {};
