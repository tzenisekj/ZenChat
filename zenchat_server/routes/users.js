const { route } = require("../middlewear/auth");
const router = require("express").Router(); 
const userController = require("../controllers/usersController")

// individual user routes
router.route("/:id")
    .put(userController.updateUser) // updates an individual user
    .delete(userController.deleteUser) // delete a single user
    .get(userController.getUser) // get a single user

// routes to follow a user
router.put("/id/follow", userController.followUser)

// unfollow a user
router.put("/id/unfollow", userController.unfollowUser)

module.exports = router; 