const fs = require("fs");
const path = require("path");
const fileName = require("file-name");
const mustache = require("mustache");
const yaml = require("js-yaml");
const marked = require("marked");

const people = path.join(__dirname, "..", "..", "people");

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

const template = fs
  .readFileSync(
    path.join(__dirname, "..", "..", "twente.me", "template.mustache")
  )
  .toString();

const license = marked(
  fs.readFileSync(path.join(__dirname, "..", "..", "LICENSE.md")).toString()
)
  .split("\n")
  .slice(2)
  .join("\n");

fs.readdirSync(people).forEach(file => {
  const pagePath = path.join(__dirname, "..", "site", `${fileName(file)}.html`);
  ensureDirectoryExistence(pagePath);
  try {
    const yamlString = yaml.safeLoad(
      fs.readFileSync(path.join(people, file)).toString()
    );
    fs.writeFileSync(
      pagePath,
      mustache.render(template, { ...yamlString, license })
    );
  } catch (e) {}
});
