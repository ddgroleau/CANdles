const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
if (err) console.log('Connection to database failed.');
  console.log('Connection to database successful!');
  const db = client.db("Candles");
  const products = client.db("Candles").collection("Products");
  client.close();
});



module.exports = client;