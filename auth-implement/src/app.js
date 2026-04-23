
const express = require("express")
const authRoute = require('../src/routes/auth.route')
const postRoute = require('../src/routes/post.route')
const cookieParser = require('cookie-parser')

const app = express()
//middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth',authRoute)
app.use('/api/post',postRoute)



module.exports = app ;