const express = require('express');
const nodemailer = require('nodemailer');
const Router = express.Router()

Router.post('/email', async (request, response) => {
    const data = await request.body;
    console.log(data)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.MY_EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN,
        }
      })
      const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `New Customer Message from the CANdles Website!`,
        text: `A customer name ${data.name} sent you a message. Their message was "${data.message}". You can contact them at ${data.email}`
      }
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          response.json({error: error});
        } else {
          console.log('Email sent: ' + info.response);
          response.json({success: 'Email sent: ' + info.response});
        }
      })
})

module.exports = Router;