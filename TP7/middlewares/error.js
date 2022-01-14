const HTTPStatuses = require('statuses');

const errorMiddleware = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }

  res.status(err.status)
    .json({
      statusCode: err.status,
      message: HTTPStatuses.message[err.status]
    });
  res.end();
}

const joiErrorMiddleware = (err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    const errors = err.error.detail.map(el => ({
      property: el.context.key,
      message: el.message.replace('\"', '').replace('\"', '')
    }));

    return res.status(400).json(errors);
  }
  next(err);
}

module.exports = {
  errorMiddleware,
  joiErrorMiddleware
};
