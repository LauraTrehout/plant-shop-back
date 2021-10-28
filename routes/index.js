const plantRouter = require('./plants')

const setupRoutes = (app) => {
    app.use('/plants', plantRouter)
}

module.exports = { setupRoutes }