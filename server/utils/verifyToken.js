const { verify } = require("jsonwebtoken");
const { ForbiddenError } = require("apollo-server-express");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const verifyToken = async token => {
  if (token) {
    if (token.startsWith("Bearer")) token = token.slice(7);
    try {
      const { currentUser } = await verify(token, SECRET_KEY);
      return currentUser
    } catch (err) {
      throw new ForbiddenError("Your token has expired, login again!");
    }
  }
};

module.exports = verifyToken;
