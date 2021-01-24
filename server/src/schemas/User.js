const mongoose = require('mongoose');
const getUtcDate = require('../helpers/dateHelper');
const TeamSchema = require('./Team').schema;

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  teams: {
    type: [TeamSchema],
    validate: {
      validator: (teams) => teams.length <= 10,
      message: 'Cannot store more than 10 teams.',
    },
  },
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
