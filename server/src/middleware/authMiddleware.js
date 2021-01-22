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
      console.log('Caller is authenticated');
      return res.redirect('/missions');
    } else {
      console.log('Caller is NOT authenticated');
      return callback();
    }
  },
};
