const { Router } = require('express');
const Post = require('../models/Post.model');
const router = new Router();


// GET to display the post form 
router.get('/create', (req, res, next) => {
  res.render('posts/create')
});

// POST to create a post
router.post('/create', (req, res, next) => {
  const {content, picture, picname} = req.body; 

  Post.create({
    content,
    picture, 
    picname
  }).then()

})
// GET to display the post 


// GET to display post details 

module.exports = router;