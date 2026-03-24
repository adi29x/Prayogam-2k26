const express = require('express');
const router = express.Router();

// Mock Auth logic
router.post('/register', async (req, res) => {
  res.status(201).json({ message: 'User registered successfully', token: 'mock-jwt-token-123' });
});

router.post('/login', async (req, res) => {
  res.status(200).json({ message: 'Login successful', token: 'mock-jwt-token-123' });
});

module.exports = router;
