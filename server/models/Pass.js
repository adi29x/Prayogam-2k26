const mongoose = require('mongoose');

const passSchema = new mongoose.Schema({
  type: { type: String, enum: ['GENERAL', 'VIP'], required: true },
  price: { type: Number, required: true },
  features: [{ type: String }],
  isSoldOut: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pass', passSchema);
