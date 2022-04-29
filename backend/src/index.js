//Enviroment variables
require("dotenv").config();

const cors = require("cors");

//Bring express to our project
const express = require("express");
const { append } = require("express/lib/response");

//Add mongoose
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts.routes");

//Instance express
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: error.message });
});
//Routes
app.use(postsRoutes);

const connectDb = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

//Put the server online
app.listen(process.env.PORT, () => {
  connectDb();
  console.log("Server is listening on port " + process.env.PORT);
});
