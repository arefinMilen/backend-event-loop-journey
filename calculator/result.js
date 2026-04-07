const { URLSearchParams } = require("url");

const resultHandler = (req, res) => { 
  console.log("Calculating result...",req.url);
  const body = [];
  req.on("data", chunk => {
    console.log("Received chunk:", chunk);
   body.push(chunk);
  });
  req.on("end", () => {
    const parseBody = Buffer.concat(body).toString();
    console.log(parseBody);
    const params = new URLSearchParams(parseBody);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    
    const num1 = parseFloat(bodyObject.num1);
    const num2 = parseFloat(bodyObject.num2);
    const operation = bodyObject.operation;
    let result;
    
    switch(operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }
    
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Calculator Result</title></head>
      <body>
        <h1>Calculation Result</h1>
        <p><strong>Operation:</strong> ${operation}</p>
        <p><strong>Number 1:</strong> ${num1}</p>
        <p><strong>Number 2:</strong> ${num2}</p>
        <p><strong>Result:</strong> ${result}</p>
        <a href="/calculator">Calculate Again</a>
      </body>
    </html>`);
    return res.end();
  })
}

exports.resultHandler = resultHandler;