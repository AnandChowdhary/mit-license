const fs = require("fs");
const path = require("path");
const fileName = require("file-name");
const mustache = require("mustache");
const yaml = require("js-yaml");
const copy = require("copy");

import { getTemplate } from "./utils/template";
import { getLicense } from "./utils/license";
import { getPeople } from "./utils/people";
import { ensureDirectoryExistence } from "./utils/directory";

const people = getPeople();
const template = getTemplate();
const license = getLicense();

people.forEach(person => {
  const pagePath: String = path.join(
    __dirname,
    "..",
    "site",
    `${fileName(person)}.html`
  );
  ensureDirectoryExistence(pagePath);
  try {
    const yamlString: String = yaml.safeLoad(
      fs
        .readFileSync(path.join(process.env.NODE_PATH || ".", "people", person))
        .toString()
    );
    fs.writeFileSync(
      pagePath,
      mustache.render(template, { ...yamlString, license })
    );
  } catch (e) {}
  copy(path.join(process.env.NODE_PATH || ".", "twente.me", "static", "*"), path.join(process.env.NODE_PATH || ".", "dist", "site"), () => {});
});
