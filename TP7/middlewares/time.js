const getTime = (req, res, next) => {
  const d = new Date();
  console.log(d.toLocaleTimeString(), d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear());
  next();
}

module.exports = getTime
