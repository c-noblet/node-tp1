const Joi = require('joi');

const createUserSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  github: Joi.string().required(),
  roleId: Joi.string()
});

const patchUserSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  github: Joi.string().required(),
  roleId: Joi.string()
});

const returnUserSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  github: Joi.string().required(),
  roleId: Joi.string(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});


module.exports = {
  createUserSchema,
  patchUserSchema,
  returnUserSchema
};
