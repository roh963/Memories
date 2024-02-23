const express = require('express');
const {getposts, createposts,updatePost,deletePost} = require('../controller/posts');


const router = express.Router();

router.get('/', getposts);
router.post('/', createposts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
module.exports=router;