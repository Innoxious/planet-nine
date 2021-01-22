const verifyIsAuthenticated = (req, res, callback) => {
  if (req.isAuthenticated()) {
    return callback();
  } else {
    return res.redirect('/login');
  }
};

const verifyIsNotAuthenticated = (req, res, callback) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  } else {
    return callback();
  }
};

module.exports = {
  verifyIsAuthenticated,
  verifyIsNotAuthenticated,
};
