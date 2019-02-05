const fs = require("fs");
const path = require("path");
const fileName = require("file-name");
const mustache = require("mustache");
const yaml = require("js-yaml");
const copy = require("copy");
const axios = require("axios");
const serial = require("promise-serial");
const dotenv = require("dotenv");
dotenv.config();

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
    const yamlString: any = yaml.safeLoad(
      fs
        .readFileSync(path.join(process.env.NODE_PATH || ".", "people", person))
        .toString()
    );
    ["scripts", "styles"].forEach(key => {
      if (
        yamlString.hasOwnProperty(key) &&
        typeof yamlString[key] === "object" &&
        yamlString[key].length
      ) {
        for (let i = 0; i < yamlString[key].length; i++) {
          const obj: any = {};
          obj[key] = yamlString[key][i];
          yamlString[key][i] = {
            httpString: obj
          };
        }
      }
    });
    const promises = [];
    const fetchedRepos = [];
    if (
      yamlString.hasOwnProperty("repos") &&
      typeof yamlString.repos === "object" &&
      yamlString.repos.length
    ) {
      yamlString.repos.forEach(repo =>
        promises.push(
          () =>
            new Promise((resolve, reject) => {
              axios
                .get("https://api.github.com/repos/" + repo, {
                  headers: {
                    "User-Agent": "AnandChowdhary",
                    Authorization: "token " + process.env.GITHUB_TOKEN
                  }
                })
                .then(response => {
                  fetchedRepos.push(response.data);
                  resolve();
                })
                .catch(error => {
                  console.log("Got an error", error);
                  reject();
                });
            })
        )
      );
    }
    serial(promises)
      .then(() => {})
      .catch(() => {})
      .then(() => {
        fs.writeFileSync(
          pagePath,
          mustache.render(template, {
            ...yamlString,
            license,
            repositories: fetchedRepos
          })
        );
        console.log(fetchedRepos);
      });
  } catch (e) {
    console.log("Error", e);
  }
  copy(
    path.join(process.env.NODE_PATH || ".", "twente.me", "static", "*"),
    path.join(process.env.NODE_PATH || ".", "dist", "site"),
    () => {}
  );
});
