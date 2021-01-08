const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./db');
const morgan = require('morgan');

dotenv.config({ path: '.env' });
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'dev';

connectDb();
const app = express();

if (ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Listening on ${PORT} for ${ENV} environment.`));
