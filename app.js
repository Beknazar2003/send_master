const express = require('express')
const path = require('path')
const indexRouter = require('./routes/router')
const cors = require('cors')

const app = express()

const port = process.env.PORT || '3000'

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200
}))

app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))
app.use('/', indexRouter)

app.listen(port)

module.exports = app