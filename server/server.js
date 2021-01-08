const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./mongo/db');
const morgan = require('morgan');
const path = require('path');

dotenv.config({ path: './../.env' });
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'dev';

connectDb();
const app = express();

if (ENV === 'dev') {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/hello', (req, res) => {
  res.send({ data: 'Hello From Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Listening on ${PORT} for ${ENV} environment.`));
