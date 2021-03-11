const { response, request } = require('express');
const express = require('express');
const Router = express.Router();
const { MongoDB, client } = require('../database')
const { readSubscribers, createSubscribers } = require('../controllers/subscribers-controller')

Router.get('/subscribers', readSubscribers);


Router.post('/subscribers', createSubscribers);


module.exports = Router;