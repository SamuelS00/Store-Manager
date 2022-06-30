const httpsStatusCode = require('../helpers/httpStatusCode');

function unprocessableEntity(message) {
  return {
    message,
    statusCode: httpsStatusCode.UNPROCESSABLE_ENTITY,
    stack: Error().stack,
  };
}

module.exports = unprocessableEntity;