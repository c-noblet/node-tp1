const validator = require('express-joi-validation').createValidator({});
const {
  createUserSchema,
  patchUserSchema,
  paramsUserSchema,
  returnUserSchema,
  returnUsersSchema,
  queryUserSchema
} = require('../schemas/user.schema.js');
const {
  getUsers,
  getUser,
  createUser,
  patchUser,
  deleteUser
} = require('../handlers/user.handler.js');
const {
  Router
} = require('express');

const router = Router();

router.get('/', validator.response(returnUsersSchema), getUsers);
router.get('/:id', validator.query(queryUserSchema), validator.params(paramsUserSchema), validator.response(returnUserSchema), getUser);
router.post('/', validator.body(createUserSchema), validator.response(returnUserSchema), createUser);
router.patch('/:id', validator.params(paramsUserSchema), validator.body(patchUserSchema), patchUser);
router.delete('/:id', deleteUser);

module.exports = router;
