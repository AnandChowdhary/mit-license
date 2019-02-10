const fs = require("fs");
const path = require("path");

const people: String = path.join(process.env.NODE_PATH || ".", "people");

const getPeople = () => {
  return fs.readdirSync(people);
};

export { getPeople, people };
