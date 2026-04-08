const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
})
app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
})
// app.use((req, res, next) => {
//   console.log("third middleware", req.url, req.method);
//   res.send(`<h1>Welcome to my Express server</h1>`);
// })
app.get("/",(req,res,next)=> {
  console.log("GET request received for root path",req.url, req.method);
  res.send(`<h1>Welcome to my Express server</h1>`);
})
app.get("/contact-us",(req,res,next)=> {
  console.log("GET request received for /contact-us", req.url, req.method);
  res.send(`<form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" required><br><br>
    <input type="email" name="email" placeholder="Enter your email" required><br><br>
    <textarea name="message" placeholder="Enter your message" required></textarea><br><br>
    <input type="submit" value="Submit">
  </form>`);
})
app.post("/contact-us",(req,res,next)=> {
  console.log("POST request received for /contact-us", req.url, req.method);
  res.send(`<h1>Thank you for contacting us!</h1>`);
})
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});