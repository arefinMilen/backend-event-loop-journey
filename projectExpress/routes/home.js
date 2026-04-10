const path = require("path");
const express = require("express");
const homeRouter = express.Router();
const rootDir = require("../utils/pathUtils");

homeRouter.get("/",(req,res,next)=> {
  console.log("GET request received for root path",req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

module.exports = homeRouter;