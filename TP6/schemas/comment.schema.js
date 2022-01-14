const {
  string
} = require('joi');
const Joi = require('joi');

const createCommentSchema = Joi.object({
  content: Joi.string().min(1).required(),
  postId: Joi.string().uuid().required(),
  userId: Joi.string().uuid().required()
});

const patchCommentSchema = Joi.object({
  content: Joi.string().min(1),
  postId: Joi.string().uuid(),
  userId: Joi.string().uuid()
});

const returnCommentSchema = Joi.object({
  id: Joi.string().uuid().required(),
  content: Joi.string().min(1).required(),
  userId: Joi.string().uuid().required(),
  postId: Joi.string().uuid().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
}).unknown(true);

const returnCommentsSchema = Joi.array().items(returnCommentSchema);

const paramsCommentSchema = Joi.object({
  id: Joi.string().uuid().required()
});


module.exports = {
  createCommentSchema,
  patchCommentSchema,
  returnCommentSchema,
  paramsCommentSchema,
  returnCommentsSchema
};
