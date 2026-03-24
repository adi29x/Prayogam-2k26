const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['TECHNICAL', 'CULTURAL', 'GAMING'], required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  image: { type: String, default: 'https://via.placeholder.com/400' },
  maxCapacity: { type: Number, default: 100 },
  registeredCount: { type: Number, default: 0 },
  amount: { type: Number, default: 0 } // 0 means free
});

module.exports = mongoose.model('Event', eventSchema);
