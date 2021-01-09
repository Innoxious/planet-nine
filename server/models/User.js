const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  dateCreatedUtc: {
    type: Date,
    default: new Date().getUTCDate(),
  },
});

module.exports = mongoose.model('User', UserSchema);
