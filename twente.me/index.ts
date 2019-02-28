const fs = require("fs");
const path = require("path");
const fileName = require("file-name");
const mustache = require("mustache");
const yaml = require("js-yaml");
const copy = require("copy");
const axios = require("axios");
const serial = require("promise-serial");
const colors = require("github-colors");
const dotenv = require("dotenv");
dotenv.config();

import { getPeople } from "./utils/people";
import { getLicense } from "./utils/license";
import { getTemplate } from "./utils/template";
import { ensureDirectoryExistence } from "./utils/directory";

const people = getPeople();
const license = getLicense();
const template = getTemplate();

people.forEach(person => {
  const pagePath: string = path.join(
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
              const cachePath: string = path.join(
                __dirname,
                "..",
                "..",
                "cache",
                `${repo}.json`
              );
              ensureDirectoryExistence(cachePath);
              if (fs.existsSync(cachePath)) {
                const response = fs.readFileSync(cachePath);
                fetchedRepos.push(JSON.parse(response));
                resolve();
              } else {
                axios
                  .get("https://api.github.com/repos/" + repo, {
                    headers: {
                      "User-Agent": "AnandChowdhary",
                      Authorization: "token " + process.env.GITHUB_TOKEN
                    }
                  })
                  .then(response => {
                    try {
                      response.data.color = colors.get(response.data.language).color;
                    } catch (e) {
                      response.data.color = "#aaa";
                    }
                    fetchedRepos.push(response.data);
                    fs.writeFileSync(cachePath, JSON.stringify(response.data));
                    resolve();
                  })
                  .catch(() => {
                    reject();
                  });
              }
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
      });
  } catch (error) {
    console.log("Error", error);
  }
  copy(
    path.join(process.env.NODE_PATH || ".", "twente.me", "static", "*"),
    path.join(process.env.NODE_PATH || ".", "dist", "site"),
    () => {}
  );
});
