const fs = require('fs');
const book = {
    title: 'Ego is The Enemy',
    author:'Ryan Holiday',
    price: 10.50
};

fs.writeFileSync('book.json',JSON.stringify(book));

const dataBuffer = fs.readFileSync('book.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(data);
