const yargs = require('yargs')

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
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

yargs.parse()