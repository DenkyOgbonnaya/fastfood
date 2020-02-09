const { Driver, Sequelize } = require("../models");
const { UserInputError } = require("apollo-server-express");
const { Op } = Sequelize;

const driverService = () => {
  const add = async driver => {
    try {
      return await Driver.create(driver);
    } catch (err) {
      throw err;
    }
  };
  const getAll = async (city) => {
    try {
      return await Driver.findAndAll({
        order: [["name", "ASC"]]
      });
    } catch (err) {
      throw err;
    }
  };
  const getSingle = async id => {
    try {
      return await Driver.findOne({ where: { id } });
    } catch (err) {
      throw err;
    }
  };
  const editOne = async (id, credentials) => {
    try {
      const driver = await Driver.findOne({ where: { id } });
      if (driver) return await Driver.update(credentials);
      throw new UserInputError("Driver not found");
    } catch (err) {
      throw err;
    }
  };
  const deleteOne = async id => {
    try {
      return await Driver.destroy({ where: { id } });
    } catch (err) {
      throw err;
    }
  };
  
  return {
    add,
    getAll,
    getSingle,
    editOne,
    deleteOne
  };
};

module.exports = driverService;
