const validator = require('validator');

const urlValidator = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.error('string.uri');
};

module.exports = {
  urlValidator,
};
