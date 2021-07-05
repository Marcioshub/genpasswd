const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
  try {
    fs.appendFile(
      path.join(__dirname, "../", "passwords.txt"),
      password + os.EOL,
      function (err) {
        if (err) {
          throw err;
        }

        console.log(chalk.green("Password saved to passwords.txt"));
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = savePassword;
