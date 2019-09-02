const book = {
    title: 'Ego is The Enemy',
    author:'Ryan Holiday'
}

console.log(JSON.stringify(book))
const parsedData = JSON.parse("{\"title\":\"Ego is The Enemy\",\"author\":\"Ryan Holiday\"}\n")
console.log(parsedData.author)
