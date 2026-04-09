//core mdule
const path = require("path");

//external modules
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");

userRouter.get("/",(req, res,next) => {
  console.log("first middleware", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "user.html"));
})

module.exports = userRouter;