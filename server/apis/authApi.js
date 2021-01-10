const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/missions');
  },
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/check', (req, res) => {
  console.log(`Check is authed: ${req.isAuthenticated()}`);
  res.send(req.isAuthenticated());
});
module.exports = router;
