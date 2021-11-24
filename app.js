const express = require('express')
const path = require('path')
const indexRouter = require('./routes/router')

const app = express()

const port = process.env.PORT || '3000'

app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use('/', indexRouter)

app.listen(port)

module.exports = app