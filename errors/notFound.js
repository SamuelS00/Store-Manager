const httpsStatusCode = require('../helpers/httpStatusCode');

function notFound(message) {
  return {
    message,
    statusCode: httpsStatusCode.NOT_FOUND,
    stack: Error().stack,
  };
}

module.exports = notFound;
