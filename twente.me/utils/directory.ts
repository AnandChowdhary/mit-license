const fs = require("fs");
const path = require("path");

// https://stackoverflow.com/a/34509653/1656944
const ensureDirectoryExistence = (filePath: String) => {
  const dirname: String = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

export { ensureDirectoryExistence };
