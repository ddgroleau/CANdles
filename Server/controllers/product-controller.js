const { MongoDB, client } = require('../database')

const readProducts = async (request, response) => {
    async function getProducts() {
        if (client.isConnected()) { 
            client.db("Candles").collection('Products').find({}).toArray(async (error, result) => {
                if(error) {
                    console.log(error)
                    response.send(error);
                    }
                response.send(result);
                })
        console.log('Successfully retreived products from database!') 
        }
        else {
            console.log('Establishing connection to database.') 
            setTimeout(()=>getProducts(),5000)
        }
    }
    getProducts()      
}

module.exports = readProducts;