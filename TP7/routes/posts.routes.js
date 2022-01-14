const validator = require('express-joi-validation').createValidator({});
const {
  createPostSchema,
  patchPostSchema,
  paramsPostSchema,
  returnPostSchema,
  returnPostsSchema,
  queryPostSchema
} = require('../schemas/post.schema.js');
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
const {
  setPostContext
} = require('../middlewares/context.js');

const router = Router();

router.use(setPostContext);

router.get('/', validator.response(returnPostsSchema), getPosts);
router.get('/:id', validator.query(queryPostSchema), validator.params(paramsPostSchema), validator.response(returnPostSchema), getPost);
router.post('/', validator.body(createPostSchema), validator.response(returnPostSchema), createPost);
router.patch('/:id', validator.params(paramsPostSchema), validator.body(patchPostSchema), patchPost);

module.exports = router;
