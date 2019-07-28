const getNotes = require('./notes.js')
const validator = require('validator')

const chalk = require('chalk')


console.log(getNotes());

console.log(validator.isEmail('email@email.com'));
console.log(validator.isEmail('email@emailcom'));

console.log(chalk.blue('npm install chalk'));
console.log(chalk.underline.bold.blue('underline, bold and blue'));