const Joi = require('joi');

const createRoleSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
});

const patchRoleSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
});

const returnRoleSchema = Joi.object({
  id: Joi.string().uuid().required(),
  name: Joi.string().min(1).max(100).required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
}).unknown(true);

const returnRolesSchema = Joi.array().items(returnRoleSchema);

const paramsRoleSchema = Joi.object({
  id: Joi.string().uuid().required()
});


module.exports = {
  createRoleSchema,
  patchRoleSchema,
  returnRoleSchema,
  paramsRoleSchema,
  returnRolesSchema
};
