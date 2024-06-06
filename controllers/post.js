const { createPost, updatePost, deletePost, getUserPosts } = require("../models/post");
const User = require("../models/user")



// createPost 

async function handleCreatePost(req, res) {
    try {
        const { post_Name, post_Image, post_Description, user_email } = req.body;
        let user = await User.findOne({ email: user_email });
        if (!user) {
            return res.status(400).json({
                status: false,
                message: 'No user found with this email',
            })
        }
        const newPost = await createPost({
            postName: post_Name,
            postImage: post_Image,
            postDescription: post_Description,
            userID: user._id
        });
        res.status(201).json({
            message: 'Post created successfully',
            data: newPost,
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while creating the post',
            error: error.message,
        });
    }
}



module.exports = {
    handleCreatePost,
}
// updatePost
// deletePost
// getAllUserPost