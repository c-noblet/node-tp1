const createError = require('http-errors');
const models = require('../models');
const Post = models.Post;
const Comment = models.Comment;

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch {
    return next(createError(404));
  }
}

const getPost = async (req, res) => {
  try {
    let args = {};
    if (req.query.comments == 'true') {
      args.include = ['comments'];
    }
    const post = await Post.findByPk(req.params.id, args);
    res.status(200).json(post);
  } catch {
    return next(createError(404));
  }
}

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId
    });
    res.status(201).json(post);
  } catch {
    return next(createError(500));
  }
}

const patchPost = async (req, res) => {
  try {
    const data = {};
    if (req.body.title) {
      data.title = req.body.title;
    }

    if (req.body.content) {
      data.content = req.body.content;
    }
    const post = await Post.update(data, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(post);
  } catch {
    return next(createError(500));
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json('Post deleted');
  } catch {
    return next(createError(500));
  }
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  patchPost,
  deletePost
}
