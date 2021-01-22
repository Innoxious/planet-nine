const mongoose = require('mongoose');
const getUtcDate = require('../helpers/dateHelper');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  dateCreatedUtc: {
    type: Date,
    default: getUtcDate(),
  },
});

module.exports = mongoose.model('User', UserSchema);
