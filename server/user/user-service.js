const User = require("../models").User;

const usertService = () => {
  const signup = async userDetails => {
    try {
      return await User.create(userDetails);
    } catch (err) {
      throw err;
    }
  };
  const emailExist = async email => {
    try {
      return await User.findOne({
        where: {
          email
        }
      });
    } catch (err) {
      throw err;
    }
  };
  const edit = async (id, credentials) => {
    try {
      const user = await User.findOne({
        where: {
          id
        }
      });
      if (user) {
        return await user.update(credentials);
      } else throw new Error("No such user found")
    } catch (err) {
      throw err;
    }
  };

  return {
    signup,
    emailExist,
    edit
  };
};
module.exports = usertService;
