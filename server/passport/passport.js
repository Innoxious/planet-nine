/* eslint-disable no-unused-vars */
const Strategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = (passport) => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, verifyCallback) => {
        const newUser = {
          googleId: profile.id,
        };

        try {
          let user = await User.findOne({ googleId: newUser.googleId });
          if (user) {
            verifyCallback(null, user);
          } else {
            user = await User.create(newUser);
            verifyCallback(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      },
    ),
  );

  passport.serializeUser((user, verifyCallback) => {
    verifyCallback(null, user.id);
  });

  passport.deserializeUser((id, verifyCallback) => {
    User.findById(id, (err, user) => verifyCallback(err, user));
  });
};
