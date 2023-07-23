require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const MONGO_URI = process.env.MONGO_URI
const InternshipRoute = require('./routes/internship')
const kaizenRoute = require('./routes/kaizen')
const projectRoute = require('./routes/project')

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,});
const db = mongoose.connection
db.on('error', console.error.bind(console, "Connection failed: "));
db.once('open', () => {
    console.log("Database Connection Established")
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/internship', InternshipRoute)
app.use('/api/kaizen', kaizenRoute)
app.use('/api/project', projectRoute)