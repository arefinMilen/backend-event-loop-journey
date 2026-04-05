console.log("This is the first node feature file.");

const fs = require("fs");
fs.writeFile("output.txt", "simple text", (err) => {
  if(err) console.log("error writing file");
  else console.log("file written successfully");
})