const express = require("express");

const app = express();

app.get("/",(req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
})
app.post("/submit-details",(req, res, next) => {
  console.log("second middleware", req.url, req.method);
  res.send(`<h1>Welcome to my Express server01</h1>`);
})


app.use("/",(req, res, next) => {
  console.log("third middleware", req.url, req.method);
  res.send(`<h1>Welcome to my Express server02</h1>`);
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
  
})