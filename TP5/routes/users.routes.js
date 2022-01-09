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

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

module.exports = router;
