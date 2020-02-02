const { verify } = require("jsonwebtoken");
const { ForbiddenError } = require("apollo-server-express");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const verifyToken = async token => {
  if (token) {
    try {
      return await verify(token, SECRET_KEY);
    } catch (err) {
      throw new ForbiddenError("Your token has expired, login again!");
    }
  }
};

module.exports = verifyToken;
