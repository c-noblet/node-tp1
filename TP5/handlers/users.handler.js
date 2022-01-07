const models = require('../models');
const User = models.User;
const Post = models.Post;

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(404).json({
      error: error
    });
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (req.query.posts) {
      user.dataValues.posts = await Post.findAll({
        where: {
          userId: req.params.id
        }
      });
    }
    res.json(user);
  } catch (error) {
    res.status(404).json({
      error: error
    });
  }
}

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      username: req.body.username,
      github: req.body.github
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({
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
    res.json(user);
  } catch (error) {
    res.status(400).json({
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
    res.json('deleted');
  } catch (error) {
    res.status(404).json({
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
