const express = require("express");
const { handleCreatePost } = require("../controllers/post");
const postRouter = express.Router();



postRouter.route('/api/createPost').post(handleCreatePost);

// post createPost 
// get getPost 
// delete deltePosst/:id

module.exports = postRouter;