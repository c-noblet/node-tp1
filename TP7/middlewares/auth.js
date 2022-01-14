const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(403).json({
      error: 'Authorization header is not set'
    });
  }
  next();
}

module.exports = checkAuth;
