const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const siteRouter = require('./routes/siteRoutes')
const { config } = require('./config/index')

const PORT = config.port

// App
const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Rutas
app.use('/', siteRouter)

// Servidor
const server = app.listen(PORT, function() {
    console.log(`Servidor lanzado en http://localhost:${server.address().port}`)
})