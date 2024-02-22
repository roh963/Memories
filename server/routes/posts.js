const express = require('express');
const {getposts, createposts,updatePost} = require('../controller/posts');


const router = express.Router();

router.get('/', getposts);
router.post('/', createposts);
router.post('/:id',updatePost);
module.exports=router;