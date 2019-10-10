const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// inicializando el servidor
const app = express()

//middlewares
app.use(bodyParser.json())
app.use(cors())

//routes
app.use('/', require('./routes/router'))

//Puerto del servidor
const port = process.env.PORT || 8080
//mensaje del servidor
printServer = ()=> console.log(`http://localhost:${port}`)

//arranque del server
app.listen(port, printServer)