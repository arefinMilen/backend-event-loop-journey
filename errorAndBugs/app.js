const http = require("http");
const testSyntax = require("./syntax");
const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.headers);  
  testSyntax();
})

const PORT = 3001;
server.listen(PORT, ()=> {
  console.log(`server is running on port http://localhost:${PORT}`);
})