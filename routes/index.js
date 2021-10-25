// Routers 
const plantRouter = require('./plants')


//Routes
const setupRoutes = app => {
    app.use('/plants', plantRouter)
}

module.exports = { setupRoutes }