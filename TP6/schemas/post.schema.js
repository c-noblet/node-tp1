const Joi = require('joi');

const createPostSchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  userId: Joi.string().uuid().required()
});

const patchPostSchema = Joi.object({
  title: Joi.string().min(1),
  content: Joi.string().min(1),
  userId: Joi.string().uuid()
});

const returnPostSchema = Joi.object({
  id: Joi.string().uuid().required(),
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  userId: Joi.string().uuid().required(),
  comments: Joi.array().items(Joi.object({
    id: Joi.string().uuid().required(),
    content: Joi.string().min(1).required(),
    userId: Joi.string().uuid(),
    postId: Joi.string().uuid(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
  }).unknown(true)),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
}).unknown(true);

const returnPostsSchema = Joi.array().items(returnPostSchema);

const paramsPostSchema = Joi.object({
  id: Joi.string().uuid().required()
});

const queryPostSchema = Joi.object({
  comments: Joi.string().empty('').default('false')
})


module.exports = {
  createPostSchema,
  patchPostSchema,
  returnPostSchema,
  paramsPostSchema,
  returnPostsSchema,
  queryPostSchema
};
