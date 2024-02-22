const express = require('express');
const {getposts, createposts} = require('../controller/posts');


const router = express.Router();

router.get('/', getposts);
router.post('/', createposts);
module.exports=router;