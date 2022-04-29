const postService = require("../services/post-service");

const getPosts = async (req, res, next) => {
  console.log("getting all pòst");
  try {
    const posts = await postService.getPosts();
    res.setHeader("Total", posts.length);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const getPost = async (req, res, next) => {
  const id = req.params.id;
  try {
    const post = await postService.getPost(id);
    console.log(post);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res) => {
  const newPost = req.body;

  try {
    const savedPost = await postService.createPost(newPost);
    res.status(201).json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Error." });
  }
};

const updatePost = async (req, res, next) => {
  const id = req.params.id;
  const postToUpdate = req.body;

  try {
    const updatedPost = await postService.updatePost(id, postToUpdate);
    if (!updatedPost) {
      return res.status(404).json({ message: "Post does not exist." });
    }
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  const id = req.params.id;
  try {
    await postService.deletePost(id);
    return res.status(404).json({ message: "Post deleted correctly" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
