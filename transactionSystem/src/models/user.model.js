const mongoose = require("mongoose");
const bycrpt = require('bcryptjs');

const userSchema = new mongoose.Schema({
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"]
      },
      name: {
        type: String,
        required: [true, "Name is required for creating an account"]

      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        select: false
      },

},{
  timesstamps: true // when user create and when update it 
})

userSchema.pre("save", async function(next){

  if(!this.isModified("password")) {
    return next()
  }
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  return next()
})

userSchema.methods.comparePassword = async function (password){
  return await bcrypt.compare("password", this.password)

}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;