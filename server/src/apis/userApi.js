const express = require('express');
const router = express.Router();
const { verifyIsAuthenticated } = require('../middleware/authMiddleware');
const User = require('../schemas/User');

router.get('/', verifyIsAuthenticated, async (req, res) => {
  try {
    const user = await User.findOne({ googleId: req.user.googleId });
    res.send(user);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
