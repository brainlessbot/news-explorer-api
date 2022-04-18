const { NOT_FOUND } = require('../enums/response-statuses');

class ResourceNotFoundError extends Error {
  statusCode = NOT_FOUND;

  constructor() {
    super('Requested resource not found.');
  }
}

module.exports = ResourceNotFoundError;
