const express = require("express");
const userRouter = express.Router();

userRouter.get("/",(req, res,next) => {
  console.log("first middleware", req.url, req.method);
  res.send(`<h1>Welcome to my Express server</h1>
    <a href="/host/add-home">Add Home</a>
    `);
})

module.exports = userRouter;