const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  AuthenticationError,
  UserInputError
} = require("apollo-server-express");
require("dotenv").config();

const { signup, emailExist } = require("./user-service")();

const userController = () => {
  const { SECRET_KEY } = process.env;

  // create a new user
  const createUser = async ({ fullname, email, password }) => {
    try {
      const hashedPassword = bcrypt.hashSync(password, 8);

      const user = await emailExist(email);
      if (user)
        throw new UserInputError("This email has already been registered");

      const newUser = await signup({
        fullname,
        email,
        password: hashedPassword
      });
      // return user token
      return generateJwt(newUser, SECRET_KEY, "24h");
    } catch (err) {
      throw err;
    }
  };
  // verify user login details and return auth token
  const loginUser = async ({ email, password }) => {
    try {
      const user = await emailExist(email);

      if (!user)
        throw new AuthenticationError(
          "Incorrect email and password combination"
        );

      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword)
        throw new AuthenticationError(
          "Incorrect email and password combination"
        );
      // return a auth token
      return generateJwt(user, SECRET_KEY, "24h");
    } catch (err) {
      throw err;
    }
  };
  // returns a jwt
  function generateJwt(user, key, expiresIn) {
    return sign(
      {
        currentUser: {
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          phone: user.phone,
          location: user.location,
          role: user.role
        }
      },
      key,
      { expiresIn }
    );
  }
  return {
    createUser,
    loginUser,
    emailExist
  };
};

module.exports = userController;
