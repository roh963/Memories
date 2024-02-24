const express = require('express');
const {getposts, createposts,updatePost,deletePost,likePost} = require('../controller/posts');


const router = express.Router();

router.get('/', getposts);
router.post('/', createposts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
module.exports=router;