const validator = require('express-joi-validation').createValidator({});
const {
  createCommentSchema,
  patchCommentSchema,
  paramsCommentSchema,
  returnCommentSchema,
  returnCommentsSchema
} = require('../schemas/comment.schema.js');
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

router.get('/', validator.response(returnCommentsSchema), getComments);
router.get('/:id', validator.params(paramsCommentSchema), validator.response(returnCommentSchema), getComment);
router.post('/', validator.body(createCommentSchema), validator.response(returnCommentSchema), createComment);
router.patch('/:id', validator.params(paramsCommentSchema), validator.body(patchCommentSchema), patchComment);

module.exports = router;
