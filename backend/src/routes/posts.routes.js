//Bring router
const {Router} = require('express')
const {getPosts, getPost, createPost, updatePost, deletePost} = require('../controller/posts')
const {listComments, saveComment, updateComment, deleteComment} = require("../controller/comments-controller")

//Instance router
const router = Router()

router.get('/post', getPosts)
router.post('/post', createPost)
router.get('/post/:id', getPost)
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)

router.get("/post/:id/comments", listComments);
router.post("/post/:id/comments", saveComment);
router.put("/post/:id/comments/:commentId", updateComment);
router.delete("/post/:id/comments/:commentId", deleteComment);

module.exports = router