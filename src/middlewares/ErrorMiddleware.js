const httpsStatusCode = require('../helpers/httpStatusCode');

const ErrorMiddleware = (err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  res
    .status(httpsStatusCode.INTERNAL_SERVER)
    .json({ message: 'internal server error' });
};

module.exports = ErrorMiddleware;
