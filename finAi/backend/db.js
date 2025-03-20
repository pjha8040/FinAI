const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

pool.connect()
  .then(() => console.log(" PostgreSQL Connected"))
  .catch(err => console.error(" Connection Error", err));

module.exports = pool;
