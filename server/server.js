require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/passes', require('./routes/passes'));

// DB Connection (Mock string for now, user needs to add their own .env)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prayogam2k26';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Basic route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Prayogam API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
