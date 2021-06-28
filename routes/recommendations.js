const express = require('express');

const router = express.Router();

const Recommendation = require('../collections/Recommendation');


//Week 2 Task 2: GET and POST

//Gets back all the documents
router.get('/' , async (req,res) => {
    try{
        const showRecommendations = await Recommendation.find();
        res.json(showRecommendations);

    }catch(err){
        res.json({message:err});
    }
});

//Specific document
router.get('/:type', async (req, res) =>{
    try{
        const specificRecommendation = await Recommendation.findOne({type: req.params.type});
        res.json(specificRecommendation);
    }catch(err){
        res.json({message:err});
    }
});

//Submits a document
router.post('/', async (req, res) => {
    const createRecommendation = new Recommendation({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description
    });

    try{
        const savedRecommendation = await createRecommendation.save()
        res.json(savedRecommendation);
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;