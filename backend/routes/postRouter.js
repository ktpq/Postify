const express = require('express')
const router = express.Router();

const postController = require('../controllers/postsController')


router.get('/api/posts', postController.getAllPost)
router.get('/api/posts/:id', postController.getPostDetail)
router.get('/api/posts/view/:id', postController.getPostView)

router.put('/api/posts/view/:id', postController.updatePostView)
router.post('/api/posts', postController.createPost)




module.exports = router;