const { MongoDB, client } = require('../database')
const { response, request } = require('express');
const express = require('express');

const readProducts = async (request, response) => {
    if (client.isConnected()) {
        const database = client.db("Candles");
        const products = database.collection("Products");
        products.find({}).toArray(async (error, result) => {
            if(error) {
                console.log(error)
                response.send(error);
            }
            const productData = result;
            console.log("We found the product data!")
            response.send(productData);
    })} else {response.send("Data not available yet. Please refresh and try again.")}
}

module.exports = readProducts;