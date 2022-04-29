const router = require("express").Router()
const postController = require("../controllers/postsController")

// create post
router.post("/", postController.createPost)

// routes to handle specific posts
router.route("/:id")
    .get(postController.getPost) // get a single users post
    .put(postController.updatePost) // update a users post
    .delete(postController.deletePost) // delets a users post

// like/unlike post route
router.put("/:id/like", postController.toggleLikePost)

// get timeline route
router.get("/timeline/:userId", postController.timeLine)

module.exports = router; 