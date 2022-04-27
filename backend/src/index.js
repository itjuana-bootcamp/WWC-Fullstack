//Enviroment variables
require('dotenv').config()

//Bring express to our project
const express = require('express')

const postsRoutes = require('./routes/posts.routes')

//Instance express
const app = express()

//Middlewares
app.use(express.json())

//Routes
app.use(postsRoutes)

//Put the server online
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port "+process.env.PORT)
})
