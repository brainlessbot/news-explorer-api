const { UNAUTHORIZED } = require('../enums/response-statuses');

class IncorrectCredentialsError extends Error {
  statusCode = UNAUTHORIZED;

  constructor() {
    super('Incorrect password or email.');
  }
}

module.exports = IncorrectCredentialsError;
