 const express = require('express')
 const bodyParser = require('body-parser')
 const router = require('./app/controllers/authControllers')
 const app = express()

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))

 require('./app/controllers/index')(app)


 app.listen(8080)