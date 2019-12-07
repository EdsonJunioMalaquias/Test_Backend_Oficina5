const express = require('express');
const router = express.Router();

const PostController = require('../controllers/postsController');


router.get('/', PostController.findAllPosts);
router.get('/', PostController.findPostByID);
router.post('/', PostController.createPost);

/*router.put('/:_id', PostController.updatePost);
router.delete('/:_id', PostController.DeletePost);
router.patch('/:_id', PostController.UpdateOneField);
router.get('/:_id/comments', PostController.findAllPostByID);*/
module.exports = router;
