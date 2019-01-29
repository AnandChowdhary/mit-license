const fs = require("fs");
const path = require("path");
const marked = require("marked");

const getLicense = () => {
  return marked(
    fs
      .readFileSync(path.join(process.env.NODE_PATH || ".", "LICENSE.md"))
      .toString()
  )
    .split("\n")
    .slice(2)
    .join("\n");
};

export { getLicense };
