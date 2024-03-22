const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600 // OTP expires in 10 minutes
  }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;




//  const mongoose=require('mongoose');

//  const otpSchema=new mongoose.Schema(
//     {
//         user_id:{
//             type:mongoose.Schema.Types.ObjectId,
//             required:true,
//             ref:'User'
//         },
//         otp:{
//             type:Number,
//             require:true

//         },
//         timestamp:{
//             type:Date,
//             deafult:Date.now,
//             require:true,
//             get:(timestamp)=> timestamp.getTime(),
//             set:(timestamp)=> new Date(timestamp),
//         }
//     }
//  )

//  module.exports=mongoose.model("Otp",otpSchema);
