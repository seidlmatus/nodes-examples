const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNode(argv.title, argv.body)
    }
})

yargs.parse()