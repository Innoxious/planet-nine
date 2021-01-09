module.exports = {
  verifyIsAuthenticated: (req, res, callback) => {
    if (req.isAuthenticated()) {
      return callback();
    } else {
      return res.redirect('/login');
    }
  },
  verifyIsNotAuthenticated: (req, res, callback) => {
    if (req.isAuthenticated()) {
      console.log('I think the caller is authenticated');
      return res.redirect('/missions');
    } else {
      console.log('I think the caller is NOT authenticated');
      return callback();
    }
  },
};
