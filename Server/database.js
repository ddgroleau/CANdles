const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_CONNECTION;
const client= new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function connectDb() {
    client.connect(err => {
      if (err) console.log('Connection to database failed. ' + { error: err });
        console.log(`Connection to database: ${client.db("Candles").databaseName} successful!`);
    
      if (!client.isConnected()) {
      setTimeout(()=>{
        console.log("Client not connected")
        connectDb();
      }, 5000);
    }
  
  });
  return true;
}

const MongoDB = {
  async connection() { 
   connectDb();
  }
};

module.exports = { MongoDB, client, connectDb};




