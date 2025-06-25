const express = require('express');
const router = express.Router();
const postController = require('../controllers/postsController');


router.get('/api/posts/today', postController.getPostToday);
router.get('/api/posts/user/:id', postController.getPostByUserId);
router.get('/api/posts/view', postController.getAllPostView);
router.get('/api/posts/count', postController.getPostCount);
router.get('/api/posts/recommend', postController.getRecommendPost);

router.get('/api/posts/view/:id', postController.getPostView);
router.get('/api/posts/:id', postController.getPostDetail);
router.get('/api/posts', postController.getAllPost);


router.put('/api/posts/view/:id', postController.updatePostView);
router.post('/api/posts', postController.createPost);


router.delete('/api/posts/:id', postController.deletePost);

module.exports = router;
