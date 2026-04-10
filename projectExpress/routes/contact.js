const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const contactRouter = express.Router();
const rootDir = require("../utils/pathUtils");

contactRouter.get("/contact-us",(req,res,next)=> {
  console.log("GET request received for /contact-us", req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
})

contactRouter.post("/contact-us",(req,res,next)=> {
  console.log(req.body);
  //console.log("POST request received for /contact-us", req.url, req.method);
  res.sendFile(path.join(rootDir,'views','contactAdded.html'));
})

module.exports = contactRouter;