const models = require('../models');
const Role = models.Role;

const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({
      error: error
    });
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
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

const createRole = async (req, res) => {
  try {
    const role = await Role.create({
      name: req.body.name
    });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({
      error: error
    });
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
  } catch (error) {
    res.status(500).json({
      error: error
    });
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
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

module.exports = {
  getRoles,
  getRole,
  createRole,
  patchRole,
  deleteRole
}
