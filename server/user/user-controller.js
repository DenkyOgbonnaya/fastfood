const {sign, verify } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { signup, emailExist } = require("./user-service")();

const userController = () => {
  const {secreteKey} = process.env;

  // create a new user
  const createUser = async (userDetails) => {
    try {
      const { fullname, email, password } = userDetails;
      const hashedPassword = bcrypt.hashSync(password, 8);

      const user = await emailExist(email);
      if (user)
        throw new Error("This email has already been registered")

      const newUser = await signup({fullname, email, password: hashedPassword });
      // return user token
      return generateJwt(newUser, secreteKey, '24h');
    } catch (err) {
        throw err;
    }
  }
  const loginUser = async (userDetails) => {
    const { email, password } = userDetails;
    try {
      const user = await emailExist(email);
      
      if (!user)
        throw new Error("Incorrect email and password combination");
    
      const validPassword = bcrypt.compareSync(password, user.password);

      if (!validPassword)
        throw new Error("Incorrect email and password combination")
        // return a auth token
        return generateJwt(user, secreteKey, '24h');
    } catch (err) {
        throw err;
    }
  }
  const isValidToken = (token) => {
    verify(token, secreteKey, (err) => {
      if (err) return false;
      return true;
    })
  }
  // returns a jwt
  function generateJwt(user, key, expiresIn) {
    return sign(
      {
        currentUser: {
          id: user.id,
          fullname: user.username,
          email: user.email,
          phone: user.profile,
          location: user.location,
          role: user.role
        }
      },
      key,
      { expiresIn }
    )
  }
  return {
    createUser,
    loginUser,
    emailExist,
    isValidToken
  }
}

module.exports = userController;
