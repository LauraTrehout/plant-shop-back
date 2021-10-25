const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connection = require('./config/db-config')
const { setupRoutes } = require('./routes')
const app = express()

const port = process.env.PORT || 4000


//Connection to db
connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack)
    } else {
      console.log('connected to database with threadId :  ' + connection.threadId)
    }
  })

  //Middleware
  app.use(cors())
  app.use(morgan('tiny'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static('/public'))

  setupRoutes(app)

  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  })
