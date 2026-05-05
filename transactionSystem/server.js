require('dotenv').config()
const express = require('express');
const app = express();

const connectDB = require('./src/config/db')
connectDB()

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
