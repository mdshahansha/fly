const express = require('express');
const router = express.Router(); // Create a new Router instance

router.use(express.json()); // Note: Corrected invocation of express.json()

const walletController = require('../../controllers/walletController');


router.post('/wallet', walletController.createWallet);
router.post('/transactions', walletController.createTransaction);
router.post('/:walletId/add-cash',walletController.cashToWallet);//credit
router.post('/:walletId/withdraw', walletController.cashFromWallet );//withdraw
router.get('/:walletId/balance',walletController.walletBalance );
router.get('/:walletId/transactions', walletController.walletTransaction);



module.exports = router;

