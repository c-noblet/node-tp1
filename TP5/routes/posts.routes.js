const {
  getPosts,
  getPost,
  createPost,
  patchPost,
  deletePost
} = require('../handlers/post.handler.js');
const {
  Router
} = require('express');

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', patchPost);
router.delete('/:id', deletePost);

module.exports = router;
