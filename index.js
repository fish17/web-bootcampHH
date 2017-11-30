let program = require("commander");
let api = require('marvel-api')

let marvel = api.createClient({
  publicKey: 'dcc178363b548b2edf8fd1efd697faae',
  privateKey: 'b82107bd04364ecd16f747d875ccbf8103313c4f'
})

program
  .command('Iron Man')
  .action(() => {
      console.log('Iron Man')
      marvel.characters.findAll()
        .then((data) => { 
          console.log(JSON.stringify(data, null, 2))
        })
        .fail(console.error)
        .done();
      })

program.parse(process.argv)

  if(!program.args.length) {
    program.help()
  }


