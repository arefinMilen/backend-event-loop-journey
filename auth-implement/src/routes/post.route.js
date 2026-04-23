const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const user = require('../models/auth.model')

router.post('/create', async (req,res)=>{

  const token = req.cookies.token;

  if(!token) {
    return res.status(401).json({
      message:"unathorized"
    })
  }

  try{
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      const user = await userModel.findOne({
         _id: decode.id
      })
      console.log(user)
  } catch (err) {
    return res.status(401).json({
      message:"token invalid"
    })
  }
 

  res.send("post created succesfully")


})

module.exports = router;