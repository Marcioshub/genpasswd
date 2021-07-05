const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const clearPasswords = () => {
  try {
    fs.writeFile(
      path.join(__dirname, "../", "passwords.txt"),
      "",
      function (err) {
        if (err) {
          throw err;
        }

        console.log(chalk.cyan("Password file has been cleared"));
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = clearPasswords;
