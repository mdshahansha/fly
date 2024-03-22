 
const OTP = require('../models/otpModel');
const twilio = require('twilio');
const User = require('../models/userModel');

// const config = require('../config');

process.env.TWILIO_ACCOUNT_SID

// Twilio configuration
// const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const twilioClient = twilio( "AC08734208d29e13d1303bc9baafb1d47b", "9fd268859b39a8a0392302d19cc44aec");


// Sending OTP (Enter Phone Number Only):

module.exports.sendOtp =async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    // Generate random OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);

    // Save OTP to database
    await OTP.create({ phoneNumber, otp: generatedOTP.toString() });

    // Send OTP via Twilio
    await twilioClient.messages.create({
      body: `this message is sended by Mohammad Shahansha :FLYWEIS -> Your OTP is: ${generatedOTP}`,
      from: "+15642343143",
      to: phoneNumber
    });

    return res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
};







//Verify OTP and Register User:

// routes/auth.js
 

// router.post('/verify', 
module.exports.verifyOtp=async (req, res) => {
  const { phoneNumber, otp } = req.body;
  const userPhone=phoneNumber

  try {
    // Verify OTP
    const otpData = await OTP.findOne({ phoneNumber, otp });
    if (!otpData) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Create or update user
    let user = await User.findOne({ userPhone });

    if (!user) {
        // console.log("phone Number not",userPhone)
      user = await User.create({ phoneNumber });
      console.log("phone user  ",user)

    } else {
    //   user.name = name;
    //   console.log("2nd phone user  ",user)
      await user.save();
    }

    // Delete OTP after successful verification
    await OTP.deleteOne({ phoneNumber });

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to register user' });
  }
}; 




//Resend OTP (Use Previous Number to Resend the OTP):
// routes/otp.js
// router.post('/resend', 
module.exports.resendOtp=async (req, res) => {
    const { phoneNumber } = req.body;
  
    try {
      // Find existing OTP data
      const otpData = await OTP.findOne({ phoneNumber });
      if (!otpData) {
        return res.status(404).json({ message: 'No OTP found for this number' });
      }
  
      // Generate new OTP
      const generatedOTP = Math.floor(100000 + Math.random() * 900000);
  
      // Update OTP in database
      otpData.otp = generatedOTP.toString();
      await otpData.save();
  
      // Resend OTP via Twilio
      await twilioClient.messages.create({
        body: `Your new  OTP ReSended is : ${generatedOTP}`,
        from: "+15642343143",
        to: phoneNumber
      });
  
      res.json({ message: 'OTP resent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to resend OTP' });
    }
  };
  
