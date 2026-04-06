const http = require("http");
const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html")
    res.write("<head><title>My Home page</title></head>")
    res.write("<body><h1>THis is my home page</h1><nav><a href='/'>Home</a> <a href='/Men'>Men</a>  <a href='/Women'>Women</a> <a href='/Kids'>Kids</a> <a href='/Cart'>Cart</a> </nav></body>")
    res.write("</html>")
    return res.end();
  } else if(req.url === "/Men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html")
    res.write("<head><title>Mens world</title></head>")
    res.write("<body><h1>This is my Mens page</h1><nav><a href='/'>Home</a> <a href='/Men'>Men</a>  <a href='/Women'>Women</a> <a href='/Kids'>Kids</a> <a href='/Cart'>Cart</a> </nav></body>")
    res.write("</html>")
    return res.end();
  } else if(req.url === "/Women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html")
    res.write("<head><title>Womens world</title></head>")
    res.write("<body><h1>This is my Womens page</h1><nav><a href='/'>Home</a> <a href='/Men'>Men</a>  <a href='/Women'>Women</a> <a href='/Kids'>Kids</a> <a href='/Cart'>Cart</a> </nav></body>")
    res.write("</html>")
    return res.end();
  } else if(req.url === "/Kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html")
    res.write("<head><title>Kids world</title></head>")
    res.write("<body><h1>This is my Kids page</h1><nav><a href='/'>Home</a> <a href='/Men'>Men</a>  <a href='/Women'>Women</a> <a href='/Kids'>Kids</a> <a href='/Cart'>Cart</a> </nav></body>")
    res.write("</html>")
    return res.end();
  } else if(req.url === "/Cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html")
    res.write("<head><title>Cart</title></head>")
    res.write("<body><h1>This is my Cart page</h1><nav><a href='/'>Home</a> <a href='/Men'>Men</a>  <a href='/Women'>Women</a> <a href='/Kids'>Kids</a> <a href='/Cart'>Cart</a> </nav></body>")
    res.write("</html>")
    return res.end();
  }
})

const PORT = 3001;
server.listen(PORT, ()=> {
  console.log(`server is running on port http://localhost:${PORT}`);
})