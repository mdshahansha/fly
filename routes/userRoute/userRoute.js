const express = require('express');
const router = express.Router(); // Create a new Router instance

router.use(express.json()); // Note: Corrected invocation of express.json()

const otpController = require('../../controllers/otpController');
const userController = require('../../controllers/userController');


router.post('/sendOtp', otpController.sendOtp);
router.post('/verifyOtp', otpController.verifyOtp);
router.post('/resendOtp', otpController.resendOtp);
router.post('/userProfile', userController.userProfile);
router.get('/userProfile', userController.userProfileData);



module.exports = router;

