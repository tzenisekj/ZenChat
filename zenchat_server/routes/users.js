const router = require("express").Router(); 
const userController = require("../controllers/usersController");
const verifyJWT = require("../middlewear/verifyJWT");

// individual user routes
router.route("/:id")
    .put(verifyJWT, userController.updateUser) // updates an individual user
    .delete(verifyJWT, userController.deleteUser) // delete a single user
    .get(verifyJWT, userController.getUser) // get a single user

// routes to follow a user
router.put("/id/follow", verifyJWT, userController.followUser)

// unfollow a user
router.put("/id/unfollow", verifyJWT, userController.unfollowUser)

module.exports = router; 