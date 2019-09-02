const fs = require('fs');

const getNotes = function () {
    return 'My notes...'
};

const addNode = function (title, body) {
    const notes = loadNotes()
    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)
};

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }
};

module.exports = {
    addNode: addNode,
    getNotes: getNotes
};