const express = require('express');

const router = express.Router();

const Income = require('../collections/Income');


//Week 2 Task 2: GET and POST

//Gets back all the documents
router.get('/' , async (req,res) => {
    try{
        const showIncome = await Income.find();
        res.json(showIncome);

    }catch(err){
        res.json({message:err});
    }
});

//Specific document
router.get('/:price', async (req, res) =>{
    try{
        const specificIncome = await Income.findOne({type: req.params.price});
        res.json(specificIncome);
    }catch(err){
        res.json({message:err});
    }
});

//Submits a document
router.post('/', async (req, res) => {
    const createIncome = new Income({
        name: req.body.name,
        price: req.body.price,
        date: req.body.date
    });

    try{
        const savedIncome = await createIncome.save()
        res.json(savedIncome);
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;