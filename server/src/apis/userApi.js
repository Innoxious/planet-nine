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
      dateCreatedUtc: user.dateCreatedUtc,
      lastUpdatedUtc: user.lastUpdatedUtc,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post('/', verifyIsAuthenticated, async (req, res) => {
  try {
    const json = req.body;
    console.log(json);
    const user = await User.findOneAndReplace(
      { googleId: req.user.googleId },
      {
        ...json,
        lastUpdatedUtc: getUtcDate(),
      },
      { new: true },
    );
    res.send(user);
  } catch (error) {
    // console.error(error);
  }
});

module.exports = router;
