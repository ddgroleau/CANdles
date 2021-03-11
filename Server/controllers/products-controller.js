const { MongoDB, client } = require('../database')
const { response, request } = require('express');
const express = require('express');

const readProducts = (request, response) => {
    if (client.isConnected()) {
        const database = client.db("Candles");
        const products = database.collection("Products");
        products.find({}).toArray((error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
    response.send(result);
    })} else {response.send("Data not available yet. Please refresh and try again.")}
}

module.exports = readProducts;