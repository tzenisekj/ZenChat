const Post = require("../models/Post")

const createPost = async (req,res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }   
    catch (err) {
        res.status(500).json(err)
    }
}

const getPost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch (err) {
        res.status(500).json(err)
    }
}

const updatePost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).json("Post updated successfully!")
        }
        else {
            res.status(403).json("you can only update on your post!")
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
}

const deletePost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted successfully!")
        }
        else {
            res.status(403).json("You can only delete you own post!")
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
}

const toggleLikePost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("The post has been liked!")
        }
        else {
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("The post has been unliked!")
        }
    }
    catch (err) {
        res.status(500).json(err)
    }  
}

const timeLine = async (req,res) => {
    try {
        const currentUser = await User.findById(req.params.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId =>{
                return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    }
    catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost,
    toggleLikePost,
    timeLine
}