const jwt = require('jsonwebtoken');

const authArtist = async(req,res,next)=>{
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({message:"unauthorized"})
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(decoded.role !== "artist"){
      return res.status(403).json({message:"this is not valid users"})
    }

    req.user = decoded;
    next()
    
  } catch(err){
    console.log(err);
    res.status(401).json({message:"unauthorized roles"})
  }
}

module.exports = {authArtist}
