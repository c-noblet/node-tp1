const Joi = require('joi');

const createUserSchema = Joi.object({
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(1).max(20).required(),
  github: Joi.string().uri().required(),
  roleId: Joi.string().guid()
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
  id: Joi.string().guid(),
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(1).max(20).required(),
  github: Joi.string().uri().required(),
  roleId: Joi.any(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

const returnUsersSchema = Joi.array().items({
  id: Joi.string().guid(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  github: Joi.string().required(),
  roleId: Joi.any(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

const paramsUserSchema = Joi.object({
  id: Joi.string().required()
});


module.exports = {
  createUserSchema,
  patchUserSchema,
  returnUserSchema,
  paramsUserSchema,
  returnUsersSchema
};
