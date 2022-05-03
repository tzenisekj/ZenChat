const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const registerUser = async (req,res) => {
    try {
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
    
        const user = await newUser.save(); 
        res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err)
        }
}

const loginUser = async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});

        if (!user) {
            res.status(404).json("User not found!")
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).json("Invalid password!")
        }

        // create JWT
        const accessToken = jwt.sign({"username": req.body.username}, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '30s'})

        const refreshToken = jwt.sign({"username": req.body.username}, process.env.REFRESH_TOKEN_SECRET,{ expiresIn: '1d'})

        user = await User.updateOne({_id: user._id}, { $set: {token: refreshToken}})

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })

        res.status(200).json({accessToken});
    } catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    registerUser,
    loginUser
}