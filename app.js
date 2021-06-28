const express = require ('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//This was body-parser before
app.use(express.json());


// Import Routes
const menuRoutes = require('./routes/menus');
const recoRoutes = require('./routes/recommendations');
const stocksRoutes = require('./routes/stocks');
const incomeRoutes = require('./routes/income')


app.use('/menus', menuRoutes);
app.use('/recommendations' , recoRoutes);
app.use('/stocks' , stocksRoutes);
app.use('/income' , incomeRoutes);


//ROUTES
app.get('/' , (req,res) => {
    res.send('Routes List: /menus , /recommendations, /stocks , /income');
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
     { useNewUrlParser: true, useUnifiedTopology: true } , () =>
    console.log('DB is online')
);


//How to start listening on the server
app.listen(3000);