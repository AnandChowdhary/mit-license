const fs = require("fs");
const path = require("path");

// https://stackoverflow.com/a/34509653/1656944
const ensureDirectoryExistence = (filePath: String) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
};

export { ensureDirectoryExistence };
