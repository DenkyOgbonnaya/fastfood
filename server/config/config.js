require('dotenv').config();
const{
  DB_USER,
  DB_NAME,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_TEST_URL,
  DB_URL,
  DATABASE_URL
} = process.env;
module.exports = {
  development: {
    /*username: 'postgres',//DB_USER,
    database: 'fastfood',//DB_NAME,
    password: 'denky', //DB_PASS
    port: DB_PORT,
    host: DB_HOST,*/
    use_env_variable: DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: DATABASE_URL,
    dialect: 'postgres'
  }
};
