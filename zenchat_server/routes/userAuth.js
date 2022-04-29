const router = require("express").Router(); 
const authController = require ("../controllers/authController")

// REGISTER route
router.post("/register", authController.registerUser)

//LOGIN route
router.post("/login", authController.loginUser)

module.exports = router;