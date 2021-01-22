const mongoose = require('mongoose');
const getUtcDate = require('../helpers/dateHelper');

const TeamSchema = new mongoose.Schema({
  names: {
    type: [String],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

module.exports = mongoose.model('Team', TeamSchema);
