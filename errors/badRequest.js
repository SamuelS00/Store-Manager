const httpsStatusCode = require('../helpers/httpStatusCode');

function badRequest(message) {
  return {
    message,
    statusCode: httpsStatusCode.BAD_REQUEST,
    stack: Error().stack,
  };
}

module.exports = badRequest;
