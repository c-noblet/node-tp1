const getUsers = (req, res) => {
  res.json({
    message: 'All users'
  });
}

const getUser = (req, res) => {
  res.json({
    message: `User id ${req.params.id}`
  });
}

const createUser = (req, res) => {
  res.json({
    message: 'Create user'
  });
}

const deleteUser = (req, res) => {
  res.json({
    message: `Delete user id ${req.params.id}`
  });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser
}
