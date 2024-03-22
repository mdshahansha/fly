// const express = require('express');

const User = require('../models/userModel'); 

module.exports.userProfile = async (req, res) => {
    const { phoneNumber, name, email, dob, gender, country, state, city } = req.body;
    console.log("phone user INN ", phoneNumber)
    const userDataToUpdate = {
        name,
        email,
        dob,
        gender,
        country,
        state,
        city
    };

    try {
        let user = await User.findOne({ phoneNumber });

        if (!user) {
            return res.status(404).json({ message: 'User and Phone Number both are not found' });
        }

        // If user exists, update the user object with new information
        user.name = userDataToUpdate.name;
        user.email = userDataToUpdate.email;
        user.dob = userDataToUpdate.dob;
        user.gender = userDataToUpdate.gender;
        user.country = userDataToUpdate.country;
        user.state = userDataToUpdate.state;
        user.city = userDataToUpdate.city;

        // Save the updated user
        user = await user.save();

        console.log('User inserted/updated successfully:', user);
        res.json({ message: 'User inserted/updated successfully', user });
    } catch (error) {
        console.error('Error inserting/updating user:', error);
        res.status(500).json({ message: 'Failed to insert/update user' });
    }
}; 

module.exports.userProfileData = async (req, res) => {
    
    let phoneNumber = '+'+req.query.phoneNumber.trim();
    // const phoneNumber = '+' + req.query.phoneNumbe/r;
    const phoneNumber1 = '+' + req.query.phoneNumber;

phoneNumber = phoneNumber.replace(/\s+/g, ''); // Remove all whitespace characters
 
    console.log(phoneNumber1) 
 
    try {
        let user = await User.findOne({ phoneNumber: phoneNumber });
        console.log("phone user  ", user);

        if (user) {
            return res.status(201).json({ message: user });
        } else {
            return res.status(400).json({ message: 'Invalid phone number, Try again by verifying OTP' });
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        return res.status(500).json({ message: 'Failed to retrieve user' });
    }
};


