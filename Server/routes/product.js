
const express = require('express');
const Router = express.Router()
const { MongoDB, client } = require('../database')
const readProducts = require('../controllers/product-controller');

Router.get('/product', readProducts);

module.exports = Router;