
const mongoose = require('mongoose');
const PostMessage = require('../module/postMessage');

const getposts=async(req, res) => {
   try {
    const postmessage= await PostMessage.find();
    res.status(200).json(postmessage);
   } catch (error) {
    res.status(404).json({message:error.message});
   }
  }
  

const createposts =async(req,res)=>{
   const post = req.body;
   const newPost = new PostMessage(post);
   try {
    await newPost.save();

    res.status(201).json(newPost);
   } catch (error) {
    res.status(409).json({message:error.message});
   }

  
  }
   const updatePost = async(req,res)=>{
      const {id:_id} = req.params;
      const post = req.body;
      if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

      const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
      res.json(updatePost);

   }
  module.exports ={getposts, createposts,updatePost};