
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
  module.exports ={getposts, createposts};