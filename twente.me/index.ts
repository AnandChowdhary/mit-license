const fs = require("fs");
const path = require("path");
const people = path.join(__dirname, "..", "..", "people");

console.log("Starting Twente.me static site generator!");

fs.readdirSync(people).forEach(file => {
  console.log(file);
});
