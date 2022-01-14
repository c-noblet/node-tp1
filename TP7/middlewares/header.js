const setHeader = (req, res, next) => {
  res.set('Application-name', 'ecv-digital');
  next();
}

module.exports = setHeader;
