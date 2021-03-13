const express = require('express');
const nodemailer = require('nodemailer');
const Router = express.Router()
const gmail = require('../controllers/email-controller')

Router.post('/email', gmail)

module.exports = Router;