const express = require('express');
const Router = express.Router();
const etsyAPI = require('../controllers/etsy-controller');

Router.get('/etsy', etsyAPI);

module.exports= Router;
