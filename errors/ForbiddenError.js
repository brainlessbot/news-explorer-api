const { FORBIDDEN } = require('../enums/response-statuses');

class ForbiddenError extends Error {
  statusCode = FORBIDDEN;

  constructor() {
    super('Not allowed to perform requested action.');
  }
}

module.exports = ForbiddenError;
