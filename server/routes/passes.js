const express = require('express');
const router = express.Router();

// Get passes
router.get('/', (req, res) => {
  res.json([
    { type: 'GENERAL', price: 499, isSoldOut: false },
    { type: 'VIP', price: 999, isSoldOut: false }
  ]);
});

module.exports = router;
