//Bring router
const {Router} = require('express')
const {getPosts, getPost, createPost, updatePost, deletePost} = require('../controller/posts')

//Instance router
const router = Router()

router.get('/post', getPosts)
router.post('/post', createPost)
router.get('/post/:id', getPost)
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)



module.exports = router