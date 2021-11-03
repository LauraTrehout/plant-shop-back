const mongoose = require('mongoose')
const plantRouter = require('express').Router()
const { Plant } = require('../models/plant')

//Gat all
plantRouter.get("/", async (req, res) => {
    const plant = await Plant.find({})
    res.send(plant)
  });

//Get indoor
plantRouter.get('/indoor', async (req, res) => {
  const indoor = await Plant.find({ category: "Indoor" })
  res.send(indoor)
})

//Get outdoor
plantRouter.get('/outdoor', async (req, res) => {
  const outdoor = await Plant.find({ category: "Outdoor" })
  res.send(outdoor)
})

//Get aromatic
plantRouter.get('/aromatic', async (req, res) => {
  const aromatic = await Plant.find({ category: "Aromatic" })
  res.send(aromatic)
})



//Create
  plantRouter.post("/", async (req, res) => {
    const newPlant = new Plant(req.body);
    const savedPlant = await newPlant.save()
    res.send(savedPlant)
  })


//Delete
    plantRouter.delete("/:id", async (req, res) => {
      const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
      res.send(deletedPlant)
  })

module.exports = plantRouter