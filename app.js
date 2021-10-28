require('dotenv').config()
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const shortid = require("shortid");


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

//Define model
const Plant = mongoose.model(
  "plant",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: String,
    price: Number,
    image: String,
    category: String,
  })
);


//Routes
app.get("/plants", async (req, res) => {
  const plant = await Plant.find({})
  res.send(plant)
});

app.post("/plants", async (req, res) => {
  const newPlant = new Plant(req.body);
  const savedPlant = await newPlant.save()
  res.send(savedPlant)
})

  app.delete("/plants/:id", async (req, res) => {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
    res.send(deletedPlant)
})

//Listen port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
