const express = require('express');

const router = express.Router();

const Stocks = require('../collections/Stocks');


//Week 2 Task 2: GET and POST

//Gets back all the documents
router.get('/' , async (req,res) => {
    try{
        const showStocks = await Stocks.find();
        res.json(showStocks);

    }catch(err){
        res.json({message:err});
    }
});

//Specific document
router.get('/:item_name', async (req, res) =>{
    try{
        const specificStock = await Stocks.findOne({item_name: req.params.item_name});
        res.json(specificStock);
    }catch(err){
        res.json({message:err});
    }
});

//Submits a post
router.post('/', async (req, res) => {
    const createStock = new Stocks({
        item_name: req.body.item_name,
        quantity: req.body.quantity,
        description: req.body.description,
        price: req.body.price
    });

    try{
        const savedStock = await createStock.save()
        res.json(savedStock);
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;