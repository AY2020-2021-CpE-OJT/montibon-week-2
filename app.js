const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
// Import Routes
const trialRoute = require('./routes/trial');

app.use('/trial', trialRoute);

//ROUTES
app.get('/' , (req,res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
     { useNewUrlParser: true, useUnifiedTopology: true } , () =>
    console.log('connected to DB')
);

//How to start listening on the server
app.listen(3000);