const fs = require('fs')
const book = {
    title: 'Ego is The Enemy',
    author:'Ryan Holiday'
}

//console.log(JSON.stringify(book))
//const parsedData = JSON.parse("{\"title\":\"Ego is The Enemy\",\"author\":\"Ryan Holiday\"}\n")
//console.log(parsedData.author)

//fs.writeFileSync('book.json',JSON.stringify(book));

const dataBuffer = fs.readFileSync('book.json')
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data)
