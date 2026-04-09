const express = require("express");

//local routers
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 Not Found</h1>
    <a href="/">Go to Home</a>
    `);
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);  
})