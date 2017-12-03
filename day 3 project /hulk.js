let api = require('marvel-api')

let marvel = api.createClient({
  publicKey: 'dcc178363b548b2edf8fd1efd697faae',
  privateKey: 'b82107bd04364ecd16f747d875ccbf8103313c4f'
})

class hulk {
  constructor() {

  }
  getIronMan() {
  marvel.characters.findAll(45)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2))
    })

    .fail(console.error)
    .done();
  }
} 

module.exports = hulk 
