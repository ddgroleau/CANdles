// --- MODULES/DEPENDENCIES ---
const express = require('express');
const dotenv = require('dotenv').config('.env');
const bodyParser = require('body-parser');
const Router = express.Router();
const { response, request } = require('express');
const subscribers = require('./routes/subscribers');
const product = require('./routes/product');
const email = require('./routes/email')
const { MongoDB, client, connectDb } = require('./database');
const path = require('path');
const etsy = require('./routes/etsy');

// EXPRESS
const app = express();
const port = process.env.PORT || 4000

app.use(express.json({limit: '1mb'}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const startApplication = async () => {
    await MongoDB.connection()
    app.listen(port, ()=> {
        console.log(`Server started at Port: ${port}`);  
    })
    }
    startApplication()


app.use(express.static(path.join(__dirname, "../Client/build")));
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname.replace("/Server", ""), "/Client/build"));
});


app.use('/', subscribers);
app.use('/', product);
app.use('/', email);
app.use('/', etsy);


// Error Handling 
app.use((request, response) => {
    const error = new Error('There was an issue. Please try again');
    error.status = 404;
    response.redirect('/')
});

app.use((error, request, response) => {
response.status(error.status || 500);
response.json({
    error: {
        message: error.message
    }
});
});

