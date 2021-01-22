const mongoose = require('mongoose');
const getUtcDate = require('../helpers/dateHelper');
const TeamSchema = require('./Team').schema;

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  teams: [TeamSchema],
  dateCreatedUtc: {
    type: Date,
    default: getUtcDate(),
  },
  lastUpdatedUtc: {
    type: Date,
    default: getUtcDate(),
  },
});

module.exports = mongoose.model('User', UserSchema);
