const plantRouter = require('express').Router()
const plant = require('../models/plant')


//Get all plants
plantRouter.get('/', (req, res) => {
     plant
     .getAll(req.query.category)
     .then(plant => res.json(plant))
     .catch(err => {
        res.status(500).send('Error retrieving data')
})})

//Get one plant
plantRouter.get('/:id', (req, res) => {
    plant.getOne(req.params.id)
    .then(plant => {
        if(!plant) res.status(404).send('Not Found')
        else res.status(200).json(plant)
    })
    .catch(err => {
        res.status(500).send('Error retrieving data')
    })
})


module.exports = plantRouter