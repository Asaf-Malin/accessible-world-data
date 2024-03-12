module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "accessible-data",
  },
  pool: { min: 0, max: 10 },
  acquireConnectionTimeout: 10000,
});
