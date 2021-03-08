const { response, request } = require('express');
const express = require('express');
const Router = express.Router();
const MongoDB = require('./database')

/*
Router.get('/subscribers', (request, response) => {
   subscribers.find({}).toArray((error, result) => {
    if(error) {
        return response.status(500).send(error);
    }
    response.send(result);
});
});



  const date = new Date(Date.now());
  const formattedDate = date.toLocaleDateString('en-US')
  let newSubcriber = {
      email: "developer@dev.com",
  }

    const p = await subscribers.insertOne(newSubcriber);
    subscribers.createIndex('email', { unique: true })
    const firstSubscriber = await subscribers.find();
    console.log(firstSubscriber);
*/


module.exports = Router;