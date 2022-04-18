const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../common/config');
const { CREATED } = require('../enums/response-statuses');
const User = require('../models/user');

const { NODE_ENV, JWT_SECRET } = process.env;

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((data) => res.json({
      token: jwt.sign(
        { _id: data._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: config.auth.loginDuration },
      ),
    }))
    .catch(next);
};

const registerUser = (req, res, next) => {
  const { email, password, name } = req.body;

  bcrypt.hash(password, 10)
    .then((hashedPassword) => User.create({
      email,
      password: hashedPassword,
      name,
    }))
    .then((data) => res.status(CREATED).json({ _id: data._id }))
    .catch(next);
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((data) => res.json(data))
    .catch(next);
};

module.exports = {
  loginUser,
  registerUser,
  getCurrentUser,
};
