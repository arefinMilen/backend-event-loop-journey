const {resultHandler} =require("./result");
const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>My Calculator</title></head>
      <body>
        <h1>Welcome to My Calculator</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>
    </html>`);
    return res.end();
  } else if(req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>My Calculator</title></head>
      <body>
        <h1>Simple Calculator</h1>
        <form action="/calculate" method="POST">
          <input type="number" name="num1" placeholder="Enter first number" required><br><br>
          <input type="number" name="num2" placeholder="Enter second number" required><br><br>
          <select name="operation" required>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select><br><br>
          <input type="submit" value="Calculate">
        </form>
      </body>
    </html>`);
    return res.end();
  } else if(req.url.toLowerCase() ==="/calculate" && req.method === "POST") {
     return resultHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    <head><title>My Calculator</title></head>
    <body>
      <h1>404 page does not exist</h1>
      <a href="/">Go to Home</a>
    </body>
  </html>`);
  return res.end();
};

exports.requestHandler = requestHandler;