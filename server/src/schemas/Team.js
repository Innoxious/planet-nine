const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  players: [String],
  missions: [{ number: Number, attempts: Number }],
});

module.exports = mongoose.model('Team', TeamSchema);
