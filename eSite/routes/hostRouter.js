const express = require("express");

const  hostRouter = express.Router();

 hostRouter.get("/host/add-home",(req, res,next) => {
  // console.log("first middleware", req.url, req.method);
  res.send(`<h1>Welcome to home </h1>
    <form action="/host/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Enter home name" required><br><br>
      <input type="text" name="homeLocation" placeholder="Enter home location" required><br><br>
      <input type="submit" value="Add Home">
    </form>
    `);
})

 hostRouter.post("/host/add-home",(req, res,next) => {
   console.log(req.body);
  res.send(`<h1>Home added successfully!</h1>
    <a href="/">Go to Home</a>
    `);
})

module.exports = hostRouter;