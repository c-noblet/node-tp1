const createError = require('http-errors');
const models = require('../models');
const Role = models.Role;

const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch {
    return next(createError(404));
  }
}

const getRole = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(role);
  } catch {
    return next(createError(404));
  }
}

const createRole = async (req, res) => {
  try {
    const role = await Role.create({
      name: req.body.name
    });
    res.status(201).json(role);
  } catch {
    return next(createError(500));
  }
}

const patchRole = async (req, res) => {
  try {
    const data = {};
    if (req.body.name) {
      data.name = req.body.name;
    };
    const role = await Role.update(data, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(role);
  } catch {
    return next(createError(500));
  }
};

const deleteRole = async (req, res) => {
  try {
    await Role.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json('Role deleted');
  } catch {
    return next(createError(500));
  }
}

module.exports = {
  getRoles,
  getRole,
  createRole,
  patchRole,
  deleteRole
}
