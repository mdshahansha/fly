
const express = require('express');
const router = express.Router();
const Wallet = require('../models/walletModel');
const Transaction = require('../models/transactionModel');




// router.post('/', 
module.exports.createWallet = async (req, res) => {
    try {
        const { userId, initialBalance } = req.body;

        // Create a new wallet document
        const wallet = await Wallet.create({ userId, initialBalance });

        res.status(201).json({ message: 'Wallet created successfully', wallet });
    } catch (error) {
        console.error('Error creating wallet:', error);
        res.status(500).json({ message: 'Failed to create wallet' });
    }
};

// Create a new transaction
// router.post('/', 
module.exports.createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json({ message: 'Transaction created successfully', transaction });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Failed to create transaction' });
    }
};



// View wallet transactions
// router.get('/:walletId/transactions', 
module.exports.walletTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.find({ walletId: req.params.walletId });
        res.json({ transactions });
    } catch (error) {
        console.error('Error fetching wallet transactions:', error);
        res.status(500).json({ message: 'Failed to fetch wallet transactions' });
    }
};

// Get wallet balance
// router.get('/:walletId/balance',
module.exports.walletBalance = async (req, res) => {
    try {
        const wallet = await Wallet.findById(req.params.walletId);
        const transactions = await Transaction.find({ walletId: req.params.walletId });
        const balance = wallet.initialBalance + transactions.reduce((acc, curr) => {
            return curr.type === 'credit' ? acc + curr.amount : acc - curr.amount;
        }, 0);
        res.json({ balance });
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
        res.status(500).json({ message: 'Failed to fetch wallet balance' });
    }
};

// Add cash to wallet
// router.post('/:walletId/add-cash',
module.exports.cashToWallet = async (req, res) => {
    try {
        const { walletId } = req.params;
        const { amount } = req.body;
        const wallet = await Wallet.findByIdAndUpdate(req.params.walletId, { $inc: { initialBalance: req.body.amount } }, { new: true });
         // Create transaction
    await Transaction.create({
        walletId,
        amount,
        type: 'credit', // Credit for adding cash
        description: 'Cash added to wallet'
      });
        res.json({ message: 'Cash added successfully', wallet });
    } catch (error) {
        console.error('Error adding cash to wallet:', error);
        res.status(500).json({ message: 'Failed to add cash to wallet' });
    }
}

// Withdraw cash from wallet
// router.post('/:walletId/withdraw', 
module.exports.cashFromWallet = async (req, res) => {
    try {
        const { walletId } = req.params;
        const { amount } = req.body;
        const wallet = await Wallet.findByIdAndUpdate(req.params.walletId, { $inc: { initialBalance: -req.body.amount } }, { new: true });
        await Transaction.create({
            walletId,
            amount,
            type: 'debit', // Debit for withdrawing cash
            description: 'Cash withdrawn from wallet'
          });
        res.json({ message: 'Cash withdrawn successfully', wallet });
    } catch (error) {
        console.error('Error withdrawing cash from wallet:', error);
        res.status(500).json({ message: 'Failed to withdraw cash from wallet' });
    }
};

// 60f0c5b16c031732c4b0e0de