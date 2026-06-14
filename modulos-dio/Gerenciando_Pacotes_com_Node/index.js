import chalk from "chalk";
import logsSymbols from "log-symbols";

console.log(chalk.blue.bgGray.italic("Hello, my package is working!"));
console.log(logsSymbols.success, "Package is working correctly!");
console.log(logsSymbols.error, chalk.red("This is an error message."));