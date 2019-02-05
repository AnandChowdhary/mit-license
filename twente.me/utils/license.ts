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
    .slice(1)
    .join("\n");
};

export { getLicense };
