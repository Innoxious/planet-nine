/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config({ path: './../.env' });

const PORT = process.env.PORT || '5000';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:' + PORT,
      changeOrigin: true,
    }),
  );
};
