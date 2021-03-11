
const express = require('express');
const Router = express.Router()
const { MongoDB, client } = require('../database')
const readProducts = require('../controllers/products-controller');

Router.get('/products', readProducts);

module.exports = Router;