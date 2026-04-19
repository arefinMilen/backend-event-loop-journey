const mongoose = require('mongoose'); 

const postScema = new mongoose.Schema({
  image:String,
  caption:String

})

const postModel = mongoose.model("post", postScema)

module.exports = postModel