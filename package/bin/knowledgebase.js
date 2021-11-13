#!/usr/bin/env node

const chalk = require("chalk");
const fs = require("fs");
const cli = require("commander");
const shell = require("shelljs");

cli
  .command("init")
  .description("Create a new project")
  .action((siteDir, {}) => {
    shell.exec("mkdir foo1");
    shell.exec("cd foo1");
    shell.exec(
      "wget -O package.json https://raw.githubusercontent.com/knowledgebasetech/kbt/tree/main/package/bin/package.json"
    );
    shell.exec(
      "wget -O .gitignore https://raw.githubusercontent.com/knowledgebasetech/kbt/tree/main/package/bin/.gitignore"
    );
    shell.exec("npm i");
    shell.exec("cp -a node_modules/knowledgebasetech/. .knowledgeBase/");
    shell.exec("cd .knowledgeBase");
    shell.exec("npm i");
    console.log("Wohoo!! Try running the server");
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
