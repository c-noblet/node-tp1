const {
  getComments,
  getComment,
  createComment,
  patchComment,
  deleteComment
} = require('../handlers/comment.handler.js');
const {
  Router
} = require('express');

const router = Router();

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', createComment);
router.patch('/:id', patchComment);
router.delete('/:id', deleteComment);

module.exports = router;
