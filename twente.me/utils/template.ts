const fs = require("fs");
const path = require("path");

const getTemplate = () => {
  const template: String = fs
    .readFileSync(
      path.join(process.env.NODE_PATH || ".", "twente.me", "template.mustache")
    )
    .toString();
  return template;
};

export { getTemplate };
