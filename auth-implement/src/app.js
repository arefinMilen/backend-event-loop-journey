
const express = require("express")
const authRoute = require('../src/routes/auth.route')

const app = express()
//middleware
app.use(express.json());
app.use('/api/auth',authRoute)



module.exports = app ;