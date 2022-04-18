const { UNAUTHORIZED } = require('../enums/response-statuses');

class AuthorizationError extends Error {
  statusCode = UNAUTHORIZED;

  constructor() {
    super('Authorization could not be completed.');
  }
}

module.exports = AuthorizationError;
