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
  firstname: Joi.string().min(1).max(100),
  lastname: Joi.string().min(1).max(100),
  email: Joi.string().email(),
  username: Joi.string().min(1).max(20),
  github: Joi.string().uri(),
  roleId: Joi.any()
});

const returnUserSchema = Joi.object({
  id: Joi.string().uuid().required(),
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(1).max(20).required(),
  github: Joi.string().uri().required(),
  roleId: Joi.any(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
  posts: Joi.array().items(Joi.object({
    id: Joi.string().uuid().required(),
    content: Joi.string().min(1),
    userId: Joi.string().uuid(),
    postId: Joi.string().uuid(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
  }).unknown(true)),
}).unknown(true);

const returnUsersSchema = Joi.array().items(returnUserSchema);

const paramsUserSchema = Joi.object({
  id: Joi.string().uuid().required()
});

const queryUserSchema = Joi.object({
  posts: Joi.string()
})

module.exports = {
  createUserSchema,
  patchUserSchema,
  returnUserSchema,
  paramsUserSchema,
  returnUsersSchema,
  queryUserSchema
};
