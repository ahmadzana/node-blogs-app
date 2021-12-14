const express = require('express');
const controller = require('../controllers/blogcontroller');
const Blog = require('../models/blog');
const router = express.Router();


router.get('/', controller.blog_index);
router.post('/',controller.blog_post);
router.get('/:id',controller.blog_result);
router.delete('/:id',controller.blog_delete);
router.get('/edit/:id',controller.blog_edit);
router.put('/edit/:id',controller.blog_edit_post)
router.get('/create',controller.blog_create_get);
  

  
  module.exports = router ;