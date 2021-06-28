const express = require('express');

const router = express.Router();

const Menu = require('../collections/Menu');


//Week 2 Task 2: GET and POST

//Gets back all the documents in the menu
router.get('/' , async (req,res) => {
    try{
        const showMenu = await Menu.find();
        res.json(showMenu);

    }catch(err){
        res.json({message:err});
    }
});

//Specific document
router.get('/:food_name', async (req, res) =>{
    try{
        const findPost = await Menu.findOne({food_name: req.params.food_name})
        res.json(findPost);
    }catch(err){
        res.json({message:err});
    }
});


//Submits a document
router.post('/', async (req, res) => {
    const createMenu = new Menu({
        food_name: req.body.food_name,
        description: req.body.description,
        price: req.body.price,
        date: req.body.date
    });

    try{
        const savedMenu = await createMenu.save()
        res.json(savedMenu);
    } catch (err){
        res.json({message: err});
    }
});

// Other commands as demonstrated on the tutorial

//Delete document
router.delete('/:food_name', async (req,res)=>{
    try {
        const removedMenu = await Menu.deleteOne({food_name: req.params.food_name})
        res.json(removedMenu);
    } catch (err){
        res.json({message:err});
    }
});

//Update a document
router.patch('/:food_name', async (req,res) => {
    try{
        const updatedMenu = await Menu.updateOne({_id:req.params.food_name},
             {$set: {food_name: req.body.food_name}})
             
        res.json(updatedMenu);

    } catch (err) {
        res.json({message: err});
    }
});
module.exports = router;