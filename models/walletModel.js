// models/Wallet.js
const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  initialBalance: {
    type: Number,
    default: 0
  }
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
