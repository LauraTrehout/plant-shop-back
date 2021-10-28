const mongoose = require('mongoose')
const plantRouter = require('express').Router()
const { Plant } = require('../models/plant')


plantRouter.get("/", async (req, res) => {
    const plant = await Plant.find({})
    res.send(plant)
  });
  
  plantRouter.post("/", async (req, res) => {
    const newPlant = new Plant(req.body);
    const savedPlant = await newPlant.save()
    res.send(savedPlant)
  })
  
    plantRouter.delete("/:id", async (req, res) => {
      const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
      res.send(deletedPlant)
  })

module.exports = plantRouter