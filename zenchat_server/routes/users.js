const { route } = require("./auth");
const bcrypt = require("bcrypt")
const router = require("express").Router(); 

// update user
router.put("/:id", async(req,res) => {
    if(req.body.userID === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10); 
            }
            catch (err) {
                
            }
        }
    }
    else {
        return res.status(403).json("You can update only your account!")
    }
})
// delete user

// get a user 

// follow a user



module.exports = router; 