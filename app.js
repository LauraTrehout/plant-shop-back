require('dotenv').config()
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { setupRoutes } = require('./routes')

const app = express();

const port = process.env.PORT
const password = process.env.PASSWORD

//Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('/public'))

//Connection to db with mongoose
mongoose.connect(`mongodb+srv://LauraTrehout:${password}@clusterlt.wtqhp.mongodb.net/plants?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

setupRoutes(app)

//Listen port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
