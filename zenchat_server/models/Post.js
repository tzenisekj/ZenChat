const mongoose = require("mongoose"); 
const { stringify } = require("nodemon/lib/utils");

const PostSchema = mongoose.Schema({
    userId: {
        type:String,
        required: true
    },
    desc: {
        type:String,
        max: 500
    },
    img: {
        type:String
    },
    likes: {
        type:Array,
        default: []
    }
},
    {timestamps:true}
)

module.exports = mongoose.model("Post", PostSchema);