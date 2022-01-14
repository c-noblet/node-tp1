const createError = require('http-errors');
const models = require('../models');
const Comment = models.Comment;

const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch {
    return next(createError(404));
  }
}

const getComment = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(comment);
  } catch {
    return next(createError(404));
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      postId: req.body.postId,
      userId: req.body.userId
    });
    res.status(201).json(comment);
  } catch {
    return next(createError(500));
  }
}

const patchComment = async (req, res) => {
  try {
    const data = {};
    if (req.body.content) {
      data.content = req.body.content;
    };
    const comment = await Comment.update(data, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(comment);
  } catch {
    return next(createError(500));
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json('Comment deleted');
  } catch {
    return next(createError(500));
  }
}

module.exports = {
  getComments,
  getComment,
  createComment,
  patchComment,
  deleteComment
}
