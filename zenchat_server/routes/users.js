const { route } = require("../middlewear/auth");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = require("express").Router(); 

// update user
router.put("/:id", async(req,res) => {
    if(req.body.userID === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                 req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findById(req.params.id, {
                $set: req.body
            })
            res.status(200).json("Account has been updated!")
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        return res.status(403).json("You can update only your account!")
    }
})

// delete user
router.delete("/:id", async(req,res) => {
    if(req.body.userID === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted!")
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        return res.status(403).json("You can't delete your account!")
    }
})

// get a user 
router.get("/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password,updatedAt, ...other} = user._doc
        res.status(200).json(other)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// follow a user
router.put("/id/follow", async (req,res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push:{followers:req.body.userId}})
                await user.updateOne({$push:{followings:req.body.userId}})
                res.status(200).json("Successfully followed user!")
            }
            else {
                res.status(403).json("You already follow this user!")
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("You can't follow yourself!")
    }
})

// unfollow a user
router.put("/id/unfollow", async (req,res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull:{followers:req.body.userId}})
                await user.updateOne({$pull:{followings:req.body.userId}})
                res.status(200).json("Successfully unfollowed user!")
            }
            else {
                res.status(403).json("You already are not following this user!")
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    else {
        res.status(403).json("You can't unfollow yourself!")
    }
})

module.exports = router; 