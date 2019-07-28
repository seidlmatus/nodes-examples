const getNotes = require('./notes.js')
const validator = require('validator')


console.log(getNotes());


console.log(validator.isEmail('email@email.com'));
console.log(validator.isEmail('email@emailcom'));