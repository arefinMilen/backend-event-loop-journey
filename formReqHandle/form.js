const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
console.log(req.url, req.method, req.headers);
if(req.url === "/") {
res.setHeader("Content-Type", "text/html");
res.write("<html>")
res.write("<head><title>My Form Page</title></head>")
res.write("<body>")
res.write("<h1>Submit Your Information</h1>")
res.write("<form action='/submit' method='POST'>")
res.write("<label for='name'>Name:</label>")
res.write("<input type='text' id='name' name='name' placeholder='Enter your name'><br><br>")
res.write("<label for='email'>Email:</label>")
res.write("<input type='email' id='email' name='email' placeholder='Enter your email'><br><br>")
res.write("<label for='gender'>Gender:</label><br>")
res.write("<input type='radio' id='male' name='gender' value='male'>")
res.write("<label for='male'>Male</label>")
res.write("<input type='radio' id='female' name='gender' value='female'>")
res.write("<label for='female'>Female</label><br><br>")
res.write("<input type='submit' value='Submit'>")
res.write("</form>")
res.write("</body>")
res.write("</html>")
return res.end();
} else if (req.url.toLowerCase() === "/submit" && req.method =="POST") {
fs.writeFileSync("formData.txt", "samsul arefin");
res.statusCode = 302;
res.setHeader("Location", "/");
}
res.setHeader("Content-Type", "text/html");
res.write("<html>")
res.write("<head><title>My Form Page</title></head>")
res.write("<body><h1>Page Not Found</h1></body>")
res.write("</html>")
return res.end();

});
const PORT = 3001;
server.listen(PORT, () => {
console.log(`server is running on port http://localhost:${PORT}`);
})