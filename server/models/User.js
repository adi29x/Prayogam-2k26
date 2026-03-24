const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  college: { type: String, default: 'Dormis Campus' },
  role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
  purchasedPasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pass' }],
  registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
