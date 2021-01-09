const express = require('express');
const passport = require('passport');
const { verifyIsNotAuthenticated } = require('../middleware/authMiddleware');

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

router.get('/login', verifyIsNotAuthenticated);
module.exports = router;
