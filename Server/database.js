const MongoClient = require('mongodb').MongoClient;

const uri= process.env.MONGODB_CONNECTION;
const client= new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const MongoDB = {
  connection: client.connect(async err => {
    if (err)  { console.log('Connection to database failed.') };
    console.log(`Connection to database: ${client.db("Candles").databaseName} successful!`)
    })
}

module.exports = { MongoDB, client}


