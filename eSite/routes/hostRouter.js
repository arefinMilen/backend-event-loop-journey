const path = require("path");

const express = require("express");
const  hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

 hostRouter.get("/host/add-home",(req, res,next) => {
  // console.log("first middleware", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "host.html"));
})

 hostRouter.post("/host/add-home",(req, res,next) => {
   console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "hostAdded.html"));
})

module.exports = hostRouter;