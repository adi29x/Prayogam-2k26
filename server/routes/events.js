const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  try {
    // const events = await Event.find();
    // Returning dummy data since no DB is actually seeded yet
    res.json([
      { _id: '1', title: 'Hack the Vault', category: 'TECHNICAL', description: '24hr Fintech Hackathon' },
      { _id: '2', title: 'StartUp Pitch', category: 'TECHNICAL', description: 'Pitch your fintech startup' }
    ]);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
