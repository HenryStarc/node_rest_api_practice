const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postName: {
        type: String,
        required: true
    },
    postImage: {
        type: String
    },
    postDescription: {
        type: String,

    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,

    },

});
// model
const Post = mongoose.model("post", postSchema);

// create 
exports.createPost = (query) => Post.create(query)
// update
exports.updatePost = (id, query) => Post.updateOne(id, query);
// delete
exports.deletePost = (id) => Post.deleteOne(id);
// get
exports.getUserPosts = (query) => Post.find(query)

