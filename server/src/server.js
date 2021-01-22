const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./mongo/db');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);

dotenv.config({ path: './../.env' });
const { PORT, ENV, SESSION_SECRET } = process.env;
if (!(PORT && ENV && SESSION_SECRET)) {
  console.error('.env missing variables');
}

require('./passport/passport')(passport);

connectDb();
const app = express();

if (ENV === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, './../client/build')));

app.use(
  expressSession({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/test', require('./apis/helloApi'));
app.use('/api/auth', require('./apis/authApi'));

app.get('/*', (req, res) => {
  console.log('Catch all');
  res.sendFile(path.join(__dirname, './../client/build/index.html'));
});

app.listen(PORT, console.log(`Listening on ${PORT} for ${ENV} environment.`));
