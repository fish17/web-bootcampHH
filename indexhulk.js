let program = require("commander");
let hulk = require('./hulk')

program
  .command('Iron Man')
  .action(() => {
      console.log('Iron Man')
        let hulk = new Hulk()
      marvel.IronMan()
     })

program.parse(process.argv)

  if(!program.args.length) {
    program.help()
  }


