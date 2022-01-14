const models = require('../models');
const User = models.User;
const Post = models.Post;

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

const getUser = async (req, res) => {
  try {
    let args = {};
    if (req.query.posts) {
      args.include = ['posts'];
    }
    const user = await User.findByPk(req.params.id, args);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

const createUser = async (req, res) => {
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
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

const patchUser = async (req, res) => {
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
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json('User deleted');
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  patchUser,
  deleteUser
}
