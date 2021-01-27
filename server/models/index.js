"use strict";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig =  require('../config/config');
require('dotenv').config();

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = dbConfig[env];
const db = {};
let sequelize;

if (env === "development") {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
  //sequelize = new Sequelize(process.env.DATABASE_URL);
} else if (env === "production") {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
} else if (process.env.DATABASE_TEST_URL) {
  sequelize = new Sequelize(process.env.DATABASE_TEST_URL);
}
fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
