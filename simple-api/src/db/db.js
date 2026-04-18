const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect('')
  console.log("connected to db")
}

module.exports = connectDB
