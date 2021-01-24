const express = require('express');
const getUtcDate = require('../helpers/dateHelper');
const router = express.Router();
const { verifyIsAuthenticated } = require('../middleware/authMiddleware');
const User = require('../schemas/User');

router.get('/', verifyIsAuthenticated, async (req, res) => {
  try {
    const user = await User.findOne({ googleId: req.user.googleId });
    res.send({
      googleId: user.googleId,
      teams: user.teams,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post('/', verifyIsAuthenticated, async (req, res) => {
  try {
    const updatedDocument = req.body;
    const user = await User.findOneAndReplace(
      { googleId: req.user.googleId },
      {
        ...updatedDocument,
        lastUpdatedUtc: getUtcDate(),
      },
      { new: true },
    );
    res.send(user);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
});

module.exports = router;
