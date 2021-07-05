#!/usr/bin/env node
const { Command } = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const clearPasswords = require("./utils/clearPasswords");
const program = new Command();
const log = console.log;

program.version("1.0.0").description("Password generator");
program
  .option("-l, --length <number>", "length of password ex: --length=8", "8")
  .option("-s, --save", "save password to password.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .option("-c, --clear", "clear current password file")
  .parse();

const { length, save, numbers, symbols, clear } = program.opts();

// clear passwords in passwords file
if (clear) {
  clearPasswords();
}

// get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// save to file
if (save) {
  savePassword(generatedPassword);
}

// copy to clipboard
clipboardy.writeSync(generatedPassword);

// output generated password
log(chalk.blue("Generated password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard!"));
