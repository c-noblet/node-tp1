const models = require('../models');
const Comment = models.Comment;

const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    res.status(404).json({
      error: error
    });
  }
}

const getComment = async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(comment);
  } catch (error) {
    res.status(404).json({
      error: error
    });
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      postId: req.body.postId,
      userId: req.body.userId
    });
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      error: error
    });
  }
}

const patchComment = async (req, res) => {
  try {
    const data = {};
    if (req.body.content) {
      data.content = req.body.content;
    };
    if (req.body.postId) {
      data.postId = req.body.postId;
    }
    if (req.body.userId) {
      data.userId = req.body.userId;
    }
    const comment = await Comment.update(data, {
      where: {
        id: req.params.id
      }
    });
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      error: error
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json('deleted');
  } catch (error) {
    res.status(400).json({
      error: error
    });
  }
}

module.exports = {
  getComments,
  getComment,
  createComment,
  patchComment,
  deleteComment
}
