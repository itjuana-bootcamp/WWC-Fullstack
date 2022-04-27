const data = require('../data/data')

const getPosts = (req, res) => {
    res.status(200).json({
        msj: "The post was listed",
        data: data,
        statusCode: 200
    })
}

const getPost = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        msj: "The post was finded",
        data: data[id],
        statusCode: 200
    })
}

const createPost = (req, res) => {
    const newPost = req.body
    data.push(newPost)
    res.status(201).json({
        msj: "The post was created sucessfully",
        data: newPost,
        statusCode: 1
    })
}

const updatePost = (req, res) => {
    const id = req.params.id;
    const updatedPost = req.body;

    data[id].author = updatedPost.author
    data[id].body = updatedPost.body
    data[id].title = updatedPost.title

    res.status(200).json({
        data: updatedPost,
        msj: "The post was updated successfully",
        statusCode: 200
    })
}

const deletePost = (req, res) => {
    const id = req.params.id;
    data.splice(id, 1)
    res.status(200).json({
        msj: "The post was deleted sucessfully",
        statusCode: 200
    })
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}