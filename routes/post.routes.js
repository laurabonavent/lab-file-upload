const { Router } = require('express');
const Post = require('../models/Post.model');
const router = new Router();

const fileUploader = require('../configs/cloudinary.config');


// GET to display the post form 
router.get('/post/create', (req, res, next) => {
  res.render('posts/create')
});

// POST to create a post
router.post('/post/create', fileUploader.single('picture'), (req, res, next) => {

  new Post({
    content: req.body.content,
    picName: req.body.picname, 
    picPath : req.file.path
  }).save().then(post => {
    res.redirect('/post')
  })
  .catch(err => next(err))

})
// GET to display the post 
router.get("/post", (req,res,next) => {
  Post.find()
    .then(postsFromDB => {
      res.render("posts/posts-list", {
        posts: postsFromDB
      });
    })
    .catch(err => next(err))
})

// GET to display post details 

module.exports = router;