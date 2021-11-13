#!/usr/bin/env node

const chalk = require("chalk");
const fs = require("fs");
const cli = require("commander");
const shell = require("shelljs");

cli
  .command("init [projectName]")
  .description("Create a new project")
  .action((projectName, {}) => {
    if (projectName) {
      shell.exec(`mkdir ${projectName}`);
      shell.exec(`mkdir ${projectName}/docs`);
      shell.exec(
        `wget -O ${projectName}/package.json https://raw.githubusercontent.com/knowledgebasetech/kbt/main/package/bin/package.json`
      );
      shell.exec(
        `wget -O ${projectName}/.gitignore https://raw.githubusercontent.com/knowledgebasetech/kbt/main/package/bin/.gitignore`
      );
      shell.exec(`cd ${projectName} && npm i`);
      shell.exec(
        `cp -a ${projectName}/node_modules/@knowledgebase/docs/. ${projectName}/.knowledgeBase/`
      );
      shell.exec(`cd ${projectName}/.knowledgeBase && npm i`);
      shell.exec(`cd ${projectName}/.knowledgeBase && ln -s ../docs docs`);
      console.log("Wohoo!! Try running the server");
    } else {
      console.log("Please input a project name");
    }
  });

cli
  .command("clear")
  .description("Clear cache")
  .action((siteDir, {}) => {
    shell.exec("rm -rf .knowledgeBase");
    console.log("You are read to Init again");
  });

async function run() {
  cli.parse(process.argv);

  if (!process.argv.slice(2).length) {
    cli.outputHelp();
  }
}

run();

process.on("unhandledRejection", (err) => {
  console.error(chalk.red(err.stack));
  process.exit(1);
});
