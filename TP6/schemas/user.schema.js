const Joi = require('joi');

const createUserSchema = Joi.object({
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(1).max(20).required(),
  github: Joi.string().uri().required(),
  roleId: Joi.string().uuid()
});

const patchUserSchema = Joi.object({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email(),
  username: Joi.string(),
  github: Joi.string(),
  roleId: Joi.string()
});

const returnUserSchema = Joi.object({
  id: Joi.string().uuid(),
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(1).max(20).required(),
  github: Joi.string().uri().required(),
  roleId: Joi.any(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
}).unknown(true);

const returnUsersSchema = Joi.array().items(returnUserSchema);

const paramsUserSchema = Joi.object({
  id: Joi.string().uuid().required()
});


module.exports = {
  createUserSchema,
  patchUserSchema,
  returnUserSchema,
  paramsUserSchema,
  returnUsersSchema
};
