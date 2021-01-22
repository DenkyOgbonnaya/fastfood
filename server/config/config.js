require('dotenv').config();
const{
  DB_USER,
  DB_NAME,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_TEST_URL,
  DB_URL
} = process.env;
//postgres://uhcdgtlbakuggo:c616ad5c14f965c15bafacc897ce4f36e1f6a147804a26d63d54e5c3d225bb27@ec2-46-137-79-235.eu-west-1.compute.amazonaws.com:5432/d4ugoaplgbc0in
module.exports = {
  development: {
    username: 'postgres',//DB_USER,
    database: 'fastfood',//DB_NAME,
    password: 'denky', //DB_PASS
    port: DB_PORT,
    host: DB_HOST,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: DB_TEST_URL,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: DB_URL,
    dialect: 'postgres'
  }
};
