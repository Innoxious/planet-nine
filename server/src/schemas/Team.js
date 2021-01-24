const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
  },
  players: {
    type: [String],
    validate: {
      validator: (players) =>
        players.length >= 2 &&
        players.length <= 5 &&
        players.every((p) => p && p.length <= 25),
      message:
        'Number of players must be between 2 and 5 inclusive, a players name cannot be more than 25 chars.',
    },
  },
  missions: {
    type: [{ number: Number, attempts: Number }],
    validate: {
      validator: (missions) =>
        missions.every((m) => m.number > 0 && m.attempts > 0),
      message: 'Mission number and attempts must be a natural number.',
    },
  },
});

module.exports = mongoose.model('Team', TeamSchema);
