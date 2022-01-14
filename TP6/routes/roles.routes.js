const validator = require('express-joi-validation').createValidator({});
const {
  createRoleSchema,
  patchRoleSchema,
  paramsRoleSchema,
  returnRoleSchema,
  returnRolesSchema
} = require('../schemas/role.schema.js');
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

router.get('/', validator.response(returnRolesSchema), getRoles);
router.get('/:id', validator.params(paramsRoleSchema), validator.response(returnRoleSchema), getRole);
router.post('/', validator.body(createRoleSchema), validator.response(returnRoleSchema), createRole);
router.patch('/:id', validator.params(paramsRoleSchema), validator.body(patchRoleSchema), patchRole);

module.exports = router;
