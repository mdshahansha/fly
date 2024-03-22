// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String
  },
  email:{
    type:String
  },
  dob:{
    type: String
  },
  gender:{
    type:String
  },
  country:{
    type:String
  },
  state:{
    type:String
  },
  city:{
    type:String
  },
//   phoneNumbers: [{
//     type: Schema.Types.ObjectId,
//     ref: 'OTP'
//   }],
phoneNumber:{
    type:String,
    req:true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
