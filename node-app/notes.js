const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => 'My notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note Added')
    } else {
        console.log("Note title taken!")
    }
};

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red('No note found!'))
    }
}


const saveNotes =  (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))


const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return []
    }
};

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote
};