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

  return {
    signup,
    emailExist
  };
};
module.exports = usertService;
