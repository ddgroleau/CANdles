const { NamedModulesPlugin } = require('webpack');
const { MongoDB, client } = require('../database')
const { response, request } = require('express');
const express = require('express');

const readSubscribers = (request, response) => {
    if (client.isConnected()) {
        const database = client.db("Candles");
        const subscribers = database.collection("Subscribers");
        subscribers.find({}).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
    response.send(result);
    })} else {response.send("Data not available yet. Please refresh and try again.")}
}

const createSubscribers = async (request, response)=> {
    if (client.isConnected()) {
        const database = client.db("Candles");
        const subscribers = database.collection("Subscribers");
        const date = new Date(Date.now());
        const formattedDate = date.toLocaleDateString('en-US')
        const newEmail = request.body.email;
        console.log(`I got a request! ${newEmail}`)
        const newSubscriber = {email: newEmail, timeStamp: `${formattedDate}` }
        try {
            const p = await subscribers.insertOne(newSubscriber);
            const newEntry = await subscribers.findOne( {email: newEmail} );
            console.log("Database updated successfully.");
            response.send(JSON.stringify(newEntry));
        } 
        catch (error) {
            console.log("There was an error.");
            response.send({message: "There was an error.", fullError: error})
        }
    }
}

module.exports = { readSubscribers, createSubscribers }