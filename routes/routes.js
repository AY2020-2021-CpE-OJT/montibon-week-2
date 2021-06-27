const express = require('express');

const router = express.Router();

const Post = require('../collections/Post');


//Week 2 Task 2: GET and POST

//Gets back all the posts
router.get('/' , async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

//Specific Post
router.get('/:postId', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err){
        res.json({message: err});
    }
});

// Other commands as demonstrated on the tutorial

//Delete Post
router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postId})
        res.json(removedPost);
    } catch (err){
        res.json({message:err});
    }
});

//Update a post
router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne({_id:req.params.postId},
             {$set: {title: req.body.title}})
             
        res.json(updatedPost);

    } catch (err) {
        res.json({message: err});
    }
});
module.exports = router;