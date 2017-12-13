let MongoClient = require('mongodb').MongoClient
let api = require('marvel-api')


class Marvel {
  constructor() {
    this.marvel = api.createClient({
        publicKey: 'dcc178363b548b2edf8fd1efd697faae',
        privateKey: 'b82107bd04364ecd16f747d875ccbf8103313c4f'
    })
    this.url = 'mongodb://localhost:27017/Marvel'
  }


    getData(callback) {
      let array = [] 
      let obj = {} 

      this.marvel.characters.findAll(30, 30) 
        .then((results) => { 
         console.log(results)
          results.data.forEach((result, index) => {
            obj = { 
            name: result.name,
            description: result.description
          
          }
          array.push(obj)
          })
          callback(array)
          .fail(console.err)
          .done
      }) 
    }


    insertDocuments(docs) {
      MongoClient.connect(this.url, (err,db) => {
      if(!err) {
        let collection = db.collection('characters')
          collection.insertMany(docs, (err, result) => {
          console.log(result)
          })
          db.close()
        }
        else {
          console.log(err)
        }
      
      })   
    } 

    query(params){ 
      MongoClient.connect(this.url, (err,db) => {
      if(!err) {

        var query = { name: 'Adam Destine' }
        let collection = db.collection('characters')
          
          collection.find(query).toArray((err, result) => {
            params(result)
          })
          db.close()
        }
        else {
          console.log(err)
        }
      
      })   
    }
}

module.exports = Marvel

