const mongoose = require("mongoose");



const connectDB = async ()=> {
  try{
    await mongoose.connect(process.env.MONGODB_URL)
      console.log("DB connected succesfully")
  } catch(err){
    console.log("db is not connected")
  }
}

module.exports = connectDB ;