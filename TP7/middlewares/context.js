const setUserContext = (req, res, next) => {
  res.set('App-Context', 'Users');
  next();
};

const setPostContext = (req, res, next) => {
  res.set('App-Context', 'Posts');
  next();
};

const setCommentContext = (req, res, next) => {
  res.set('App-Context', 'Comments');
  next();
};

module.exports = {
  setUserContext,
  setCommentContext,
  setPostContext
}
