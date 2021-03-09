const { response, request } = require('express');
const express = require('express');
const MongoClient = require('mongodb');
const Router = express.Router();
const { MongoDB, client } = require('./database')

Router.get('/subscribers', (request, response) => {
    if (client.isConnected()) {
        const database = client.db("Candles");
        const subscribers = database.collection("Subscribers");
        subscribers.find({}).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
    response.send(result);
    })} else {response.send("Data not available yet. Please refresh and try again.")}
})


Router.post('/subscribers', async (request, response)=> {
    if (client.isConnected()) {
        const database = client.db("Candles");
        const subscribers = database.collection("Subscribers");
        const date = new Date(Date.now());
        const formattedDate = date.toLocaleDateString('en-US')
        const newEmail = request.body.email;
        console.log(`I got a request! ${newEmail}`)
        const newSubscriber = {email: newEmail, timeStamp: `${formattedDate}` }
        console.log(newSubscriber);
        try {
            const p = await subscribers.insertOne(newSubscriber);
            const newEntry = await subscribers.findOne( {email: newEmail} );
            console.log(newEntry);
            response.json(newEntry);
        } 
        catch (error) {
            console.log("There was an error.");
        }
    }
})



module.exports = Router;