const createError = require('http-errors');
const models = require('../models');
const User = models.User;
const Post = models.Post;

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch {
    return next(createError(404));
  }
}

const getUser = async (req, res, next) => {
  try {
    let args = {};
    if (req.query.posts == 'true') {
      args.include = ['posts'];
    }
    const user = await User.findByPk(req.params.id, args);
    res.status(200).json(user);
  } catch {
    return next(createError(404));
  }
}

const createUser = async (req, res, next) => {
  try {
    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      github: req.body.github
    }
    if (req.body.roleId) {
      data.roleId = req.body.roleId
    }
    const user = await User.create(data);
    res.status(201).json(user);
  } catch {
    return next(createError(500));
  };
}

const patchUser = async (req, res, next) => {
  try {
    const data = {};
    if (req.body.firstname) {
      data.firstname = req.body.firstname;
    };
    if (req.body.lastname) {
      data.lastname = req.body.lastname;
    };
    if (req.body.email) {
      data.email = req.body.email;
    };
    if (req.body.username) {
      data.username = req.body.username;
    };
    if (req.body.github) {
      data.github = req.body.github;
    };
    if (req.body.roleId) {
      data.roleId = req.body.roleId;
    }
    const user = await User.update(data, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(user);
  } catch {
    return next(createError(500));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json('User deleted');
  } catch {
    return next(createError(500));
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  patchUser,
  deleteUser
}
