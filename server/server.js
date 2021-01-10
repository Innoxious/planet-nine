const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./mongo/db');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

dotenv.config({ path: './../.env' });
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'dev';
require('./passport/passport')(passport);

connectDb();
const app = express();

if (ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, './../client/build')));

app.use(
  session({
    secret: 'asdasdasd',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/test', require('./apis/helloApi'));
app.use('/api/auth', require('./apis/authApi'));

app.get('*', (req, res) => {
  console.log('Catch all');
  res.sendFile(
    path.join(__dirname, './../client/build/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    },
  );
});

app.listen(PORT, console.log(`Listening on ${PORT} for ${ENV} environment.`));
