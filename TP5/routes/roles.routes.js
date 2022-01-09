const {
  getRoles,
  getRole,
  createRole,
  patchRole,
  deleteRole
} = require('../handlers/role.handler.js');
const {
  Router
} = require('express');

const router = Router();

router.get('/', getRoles);
router.get('/:id', getRole);
router.post('/', createRole);
router.patch('/:id', patchRole);
router.delete('/:id', deleteRole);

module.exports = router;
