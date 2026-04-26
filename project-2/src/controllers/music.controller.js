const musicModel = require('../models/music.model');
const {uploadFile} = require('../services/storage.service')
const jwt = require("jsonwebtoken");



const createMusic = async(req,res)=>{
 
  const token = req.cookies.token;

      if(!token){
        return res.status(401).json({ message:"unauthorized01" })
      }

      try{
              const decoded = jwt.verify(token, process.env.JWT_SECRET)

              if(decoded.role!=="artist"){
                res.status(403).json({message:"you dont have access to create an music "})
              }

      

      const {title} = req.body;
      const file = req.file;

      const result = await uploadFile(file.buffer.toString('base64'))

      const music = await musicModel.create({
        uri: result.uri,
        title,
        artist: decoded.id,
      })
      res.status(201).json({
        message: "Music created succesfully",
        music: {
          id:music._id,
          uri: music.uri,
          title:music.title,
          artist: music.artist,
        }
      })
      }catch(err){
        console.log(err)
        res.status(401).json({message:"unauthorized02"})
      }
}

module.exports = { createMusic }