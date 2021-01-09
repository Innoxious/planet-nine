const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  dateCreatedUtc: {
    type: Date,
    default: Date.parse(new Date().toISOString()),
  },
});

module.exports = mongoose.model('User', UserSchema);
