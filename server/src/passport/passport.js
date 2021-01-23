const Strategy = require('passport-google-oauth20').Strategy;
const User = require('../schemas/User');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
if (!(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET)) {
  console.error('.env missing variables');
}

module.exports = (passport) => {
  passport.use(
    new Strategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
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
        } catch (error) {
          console.error(error);
        }
      },
    ),
  );

  passport.serializeUser((user, verifyCallback) => {
    verifyCallback(null, user.id);
  });

  passport.deserializeUser((id, verifyCallback) => {
    User.findById(id, (error, user) => verifyCallback(error, user));
  });
};
