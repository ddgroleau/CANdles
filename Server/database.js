const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const MongoDB = {
  connection: client.connect(async err => {
    if (err) console.log('Connection to database failed.');
    this.database = client.db("Candles")
    this.products = this.database.collection("Products")
    this.subscribers = this.database.collection("Subscribers")
    console.log(`Connection to database: ${this.database.databaseName} successful!`)
    }),

  database: '',
  products: '',
  subscribers: ''
}


module.exports = MongoDB;

