const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://trans:trans@cluster0.3gzaffk.mongodb.net/flyweis', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
