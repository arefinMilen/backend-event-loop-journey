const path = require("path");
const express = require("express");
const homeRouter = require("./routes/home");
const contactRouter = require("./routes/contact");


const app = express();
app.use(homeRouter);
app.use(contactRouter);



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});