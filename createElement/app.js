const http = require("http");

const server = http.createServer((req,res)=> {
  console.log(req.url, req.method, req.headers);
  if(req.url === "/") {
    res.setHeader("Content-Type", "text/html");
  res.write("<html")
  res.write("<head><title>My Home page</title></head>")
  res.write("<body><h1>THis is my home page</h1></body>")
  res.write("</html>")
  return res.end();
  } else if(req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
  res.write("<html")
  res.write("<head><title>My about page</title></head>")
  res.write("<body><h1>tell me about yourself</h1></body>")
  res.write("</html>")
  return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html")
  res.write("<head><title>My First Node App</title></head>")
  res.write("<body><h1>THis is Arefin from Dhaka Bangladesh</h1></body>")
  res.write("</html>")
  res.end();
})
const PORT = 3001;
server.listen(PORT, ()=> {
  console.log(`server is running on port http://localhost:${PORT}`);
})