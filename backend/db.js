const mongoose = require('mongoose');

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
